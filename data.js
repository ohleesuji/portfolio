const PORTFOLIO = {
  "companies": [
    {
      "key": "kakao",
      "name": "카카오",
      "role": "카나나 AI Product Manager",
      "period": "2025.12.01 ~ 현재",
      "duration": "약 11개월",
      "start": 9,
      "end": 10,
      "intro": "카나나 개인화 메모리·대화연동의 제품 전략과 출시·운영, 모델·프롬프트 품질 개선"
    },
    {
      "key": "samsung",
      "name": "삼성증권",
      "role": "모니모 서비스 기획·운영",
      "period": "2025.02.01 ~ 2025.11.14",
      "duration": "9개월 14일",
      "start": 11,
      "end": 11,
      "intro": "대출 상태 시각화와 상황별 행동 유도로 사용자 여정 재설계",
      "rank": "수석"
    },
    {
      "key": "toss",
      "name": "토스",
      "role": "대출·보험 Product Owner",
      "period": "2021.03.29 ~ 2024.11.26",
      "duration": "3년 7개월 29일",
      "start": 12,
      "end": 22,
      "intro": "대출 · 보험 제품 전략 · 우선순위 · 성과 관리, 퍼널 개선 · 금융사 연동 · 규제특례 추진"
    },
    {
      "key": "nhn",
      "name": "NHN DATA",
      "role": "광고 플랫폼 Product Manager",
      "period": "2017.12.01 ~ 2021.03.31",
      "duration": "3년 4개월",
      "start": 23,
      "end": 28,
      "intro": "광고 플랫폼 연동·데이터 상품 기획과 수익·운영 효율 개선",
      "rank": "대리"
    },
    {
      "key": "socialup",
      "name": "소셜업",
      "role": "SNS 광고 오픈마켓 서비스 기획·사업 총괄",
      "period": "2014.08.01 ~ 2017.09.19",
      "duration": "3년 1개월 19일",
      "start": 29,
      "end": 29,
      "intro": "광고주 수요 검증부터 SNS 광고 오픈마켓 출시·운영까지 총괄",
      "rank": "대표 (창업)"
    }
  ],
  "cases": [
    {
      "id": "case-5",
      "page": 5,
      "company": "kakao",
      "title": "서버 분석 첫 도입을 위한 대화 업로드·후속 질문 설계",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "서버에서 대화를 분석하는 첫 서비스로, 대화 선택·업로드·분석·답변을 연결하는 새 실행 흐름 필요. 대화창 안에서 이전 분석과 새 질문이 섞이지 않도록 맥락·진행 상태 관리"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "대상 채팅방·기간 선택→대화 업로드→서버 분석→원래 질문 답변의 전체 흐름과 요청 유형 8종 정의",
            "사용자 선택과 분석이 끝난 뒤 원래 질문을 다시 입력하지 않아도 답변이 이어지도록 실행 단계 연결",
            "새 질문과 후속 질문을 구분하고, 3시간 내에는 이전 채팅방·기간으로 다시 분석하되 범위가 바뀌면 재선택하도록 정의",
            "대화 사용 동의·분석 후 원문 삭제와 이탈·재진입·만료·실패 시 재시도 동작 설계"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "서버 기반 분석의 대화 선택·업로드·답변·복구 정책과 화면 흐름 확정",
            "추가 질문마다 선택 과정을 반복하지 않고, 대화 맥락에 맞춰 재분석하는 경험 설계"
          ]
        }
      ],
      "role": "서버 분석 첫 도입의 제품 흐름·대화 맥락·동의·복구 정책 설계",
      "contribution": "100%",
      "team": "디자인 1명 · 클라이언트 개발 2명 · 서버 개발 2명 · AI 모델 1명 · 프런트엔드 개발 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-v4-image.png",
          "label": "분석할 대화 요청",
          "caption": "분석할 대화 요청",
          "wide": false,
          "width": 786,
          "height": 1704
        },
        {
          "src": "assets/sep23-v4-image2.png",
          "label": "대상 채팅방 선택",
          "caption": "대상 채팅방 선택",
          "wide": false,
          "width": 667,
          "height": 1323
        },
        {
          "src": "assets/sep23-v4-image3.png",
          "label": "기간 확인 · 분석 시작",
          "caption": "기간 확인 · 분석 시작",
          "wide": false,
          "width": 693,
          "height": 1362
        }
      ],
      "galleryColumns": 3,
      "teamLabel": "협업 구성",
      "evidenceTitle": "첫 서버 분석 서비스의 대화 선택·업로드·분석 흐름",
      "disclaimer": "피그마 · 정책서의 초기 시안",
      "position": "AI Product Manager"
    },
    {
      "id": "case-7",
      "page": 7,
      "company": "kakao",
      "title": "전체 채팅방 조회 확대와 입력 토큰 약 60% 절감",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "대화가 오간 방과 시점을 기억해야 검색을 시작할 수 있는 불편. 찾아볼 대화를 넓힐수록 모델이 한 번에 읽을 수 있는 입력량도 함께 관리할 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "실제 메시지 수·길이·화자·시간 정보를 측정해 초기 범위를 최대 4개 방·기본 2주로 결정",
            "최신순·대화량 비례·균등 배분을 비교한 뒤, 대화량이 적은 방도 기본 분량을 확보하고 남는 입력량을 재배분하는 정책 선택",
            "반복 필드가 많은 JSON을 간결한 텍스트로 변환하고 같은 대화 샘플의 입력 토큰 비교",
            "“다음 주 일정”의 근거도 이전 대화에 있다는 점을 반영해, 질문에 나온 날짜와 실제 조회 기간 분리",
            "질문에 맞는 전체 채팅방·기간을 추천하고 [바로 확인하기]로 분석을 시작하도록 화면·조회 기준 개선"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "최대 4개 방을 직접 고르던 방식에서 질문 기반 전체 채팅방 탐색으로 확대",
            "같은 대화 샘플의 입력량 약 60% 절감: JSON 약 17,000 → 간결한 텍스트 약 6,900 토큰"
          ]
        }
      ],
      "role": "실제 대화량 분석, 입력 형식·조회 범위·사용자 흐름 개선",
      "contribution": "100%",
      "team": "디자인 · 클라이언트 개발 · 서버 개발 · AI 모델 · 프런트엔드 개발",
      "caption": null,
      "originals": [
        {
          "src": "assets/sep23-scope_screen_a.png",
          "label": "추천 조회 범위 안내",
          "caption": "추천 조회 범위 안내",
          "wide": false,
          "width": 681,
          "height": 1190
        },
        {
          "src": "assets/scope-response-corrected.png",
          "label": "대화에 근거한 응답",
          "caption": "대화에 근거한 응답",
          "wide": false,
          "width": 388,
          "height": 696
        },
        {
          "src": "assets/hierarchy-format-comparison.svg",
          "label": "같은 대화의 JSON·플랫텍스트 입력 비교",
          "caption": "같은 메시지·화자·시간을 더 간결한 입력으로 변환 · 동일 샘플 비교",
          "width": 1200,
          "height": 930,
          "wide": true
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "협업 구성",
      "evidenceTitle": "질문에 맞는 조회 범위 추천과 입력 형식 개선",
      "disclaimer": "실제 서비스 화면과 질문 의도별 조회 방식",
      "position": "AI Product Manager",
      "anchorAliases": [
        "case-token-budget"
      ]
    },
    {
      "id": "case-6",
      "page": 6,
      "company": "kakao",
      "title": "대화 분할 분석 도입과 동시 처리·응답 통합 설계",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "대화를 순서대로 분석하면 대기시간이 누적되고, 일부 구간만 보고 요약·관계를 판단하면 전체 맥락을 놓치는 문제"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "긴 대화를 여러 구간으로 나눠 동시에 분석하고, 자원·비용을 고려해 한 번에 처리할 수 있는 양 정의",
            "분석 완료 순서와 원래 대화 순서를 구분해, 사건의 앞뒤 맥락을 복원하는 통합 흐름 설계",
            "유효한 근거 선별·중복 제거·충돌 처리 기준을 정하고, 확인되지 않은 사실은 답변에서 확정하지 않도록 정의",
            "“근거를 찾지 못함”과 “실행 실패”를 구분하고, 실패한 구간만 재시도·최종 실패 시 불완전한 답변 차단"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "긴 대화를 나누어 처리하는 분석 방식 도입",
            "동시 처리량·대화 순서 복원·실패 구간 재시도 기준 정의",
            "분석 결과 통합과 사용자에게 보여줄 최종 답변 생성의 역할 분리"
          ]
        }
      ],
      "role": "대화 분할·동시 분석·결과 통합과 실패 시 재처리 기준 설계",
      "contribution": "100%",
      "team": "서버 개발 2명 · AI 모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/hierarchy-chunk-flow.svg",
          "label": "대화 분할·동시 분석·결과 통합 흐름",
          "caption": "나눠 읽은 결과를 대화 순서에 맞춰 통합하고, 실패한 구간만 재시도",
          "width": 1200,
          "height": 1050,
          "wide": true
        }
      ],
      "galleryColumns": 1,
      "teamLabel": "협업 구성",
      "evidenceTitle": "대화 분할 처리와 동시 분석·통합·재시도 기준",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager"
    },
    {
      "id": "case-8",
      "page": 8,
      "company": "kakao",
      "title": "모델·프롬프트 개선으로 사실 확인 점수 0.86→0.97",
      "image": "assets/evidence-hd-08.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "긴 대화에서 정정된 정보를 놓치거나 발언한 사람을 혼동하는 오류 발생. 모델·프롬프트를 바꿨을 때 어떤 오류가 개선되는지 비교할 기준 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "정보 정정·발언자 혼동 등 실제 실패 상황을 담은 평가 21건과 기대 답변·채점 기준 설계",
            "에이전트 빌더에서 모델·프롬프트·추론 방식 5개 조합을 케이스별 5회씩 실행해 총 525회 비교",
            "답변을 원문과 대조해 정정된 최종값·발언 주체·정보 출처의 오류를 구분하고 응답 기준의 수정 대상 도출",
            "유형별 정확도·내용 품질·실행 오류·응답 시간 등 8개 지표를 함께 비교해 후속 개선 기준과 과제 선정"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "선정 조합의 사실 확인 평가군 평균 점수 0.860→0.969로 개선",
            "정답 기준이 명확한 추출·요약 부분 평가군 합격률 각 92%로 5개 조합 중 최고",
            "실험에서 품질이 가장 높은 조합(평균 17.20초)과 유사한 내용 품질에서 평균 4.98초인 조합을 후속 개선 기준으로 선정. 실행 오류는 별도 개선 과제로 분리"
          ]
        }
      ],
      "role": "모델·프롬프트 비교 평가, 품질·응답 시간·실행 오류를 고려한 기준안과 개선 과제 선정",
      "contribution": "100%",
      "team": "AI 모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-evaluation-original.png",
          "label": "평가 케이스 결과 분석안",
          "caption": "21개 질문을 조합별로 반복 실행하고, 내용 점수·실행 오류·응답 시간을 분리해 비교",
          "wide": true,
          "width": 2200,
          "height": 1866
        },
        {
          "src": "assets/nov07-agent-builder.png",
          "label": "대화 분석 에이전트 모델·프롬프트 구성",
          "caption": "요청별 도구와 응답 노드를 연결하는 에이전트 구성 화면 · 모델명 익명화",
          "wide": true,
          "width": 2227,
          "height": 1147
        }
      ],
      "evidenceNote": "내용 점수는 정상 응답 기준 · 실행 실패는 별도 집계",
      "galleryColumns": 1,
      "teamLabel": "협업 구성",
      "evidenceTitle": "평가 케이스 결과 분석안",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager"
    },
    {
      "id": "case-agent-quality",
      "company": "kakao",
      "position": "AI Product Manager",
      "title": "메모리 프롬프트 고도화·저장 평가 최고 94.6%",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "AI 추천을 사용자 사실로 저장하거나, 날짜만 바꿔도 기존 예산·조건까지 지워지는 오류. 잘못된 단계를 추적하고 수정 뒤 다른 메모리 동작도 함께 확인할 필요",
            "메모리로 정리한 정상 정보까지 민감정보로 잘못 분류돼 저장이 차단되는 문제. 필요한 개인화 정보와 보호할 정보를 구분하는 판정 기준 점검"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "실제 메모리 오류를 평가 케이스로 만들고, 사용자가 한 말·기존 메모리·저장 결과·도구 실행을 대조해 원인 분석",
            "AI 추천의 사실 오저장과 날짜 수정 시 기존 예산·조건까지 지워지는 오류를 추적하고, 프롬프트·도구 설명 개선",
            "민감정보 검사로 저장이 차단된 56건의 원문과 분류 점수를 대조해, 정상 정보까지 막히는 원인 분석",
            "민감정보 판정 기준값 50·90·95%별 차단 변화와 실제 민감정보를 놓칠 위험을 함께 검토하고, 95% 조정안 도출·모델 담당자 협의",
            "프롬프트 변경 전후의 저장 결과를 비교하고, 모델 문제·채점 오류·실행 실패를 구분해 수정 대상 결정"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "메모리 저장 시나리오 222개의 반복 평가 중 최고 94.6% 점수 확인",
            "실제 대화 228개(1,502턴)로 오저장·부분 수정 등 상황의 검증 범위 확대",
            "정상 정보의 과도한 차단과 민감정보 누락 위험을 함께 검토한 판정 기준 조정안 마련",
            "오류 사례를 평가셋에 추가하고, 수정 전후 결과와 기존 정상 사례를 함께 확인하는 반복 검증 체계 운영"
          ]
        }
      ],
      "role": "메모리 오류 원인 분석, 프롬프트·도구 설명 개선, 민감정보 판정 기준 조정안과 평가·재검증 주도",
      "team": "AI 모델 1명",
      "originals": [
        {
          "src": "assets/nov07-memory-eval-cases.png",
          "label": "사용자의 메모리 저장·수정 요청 평가 케이스",
          "caption": "“저장해줘·고쳐줘” 요청과 역할극·미확정 계획 등 상황별 예상 결과 작성",
          "wide": true,
          "width": 2870,
          "height": 1166
        },
        {
          "src": "assets/nov07-evaluation-runs.png",
          "label": "동일 평가셋 반복 실행·비교 이력",
          "caption": "222개 상황의 버전별 실행 비교 · 첨부 반복 평가 중 최고 94.6%",
          "wide": true,
          "width": 1994,
          "height": 1488
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "평가 케이스와 프롬프트 버전별 실행 결과",
      "disclaimer": "내부 모델명·프롬프트·식별 정보 비식별화",
      "evidenceNote": "시나리오·실대화 검증과 130회 이상 평가 · Codex·Claude로 전후 결과 분석"
    },
    {
      "id": "case-9",
      "page": 9,
      "company": "kakao",
      "title": "맞춤형 답변을 위한 개인화 메모리 기획",
      "image": "assets/evidence-hd-09.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "사용자의 취향·생활 배경을 다음 답변에도 활용하되, AI의 추측이나 일회성 질문을 사용자 사실로 저장하지 않는 메모리 설계. 저장 내용을 사용자가 확인·수정·삭제하는 통제 범위 정의"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "대화와 기존 메모리 비교→새 정보 선별→추가·부분 수정·삭제→저장 전 검사→변경 결과 확인의 전체 흐름 설계",
            "여러 대화에서 이어진 탐색 중 목적·분류가 미확정인 정보는 Memory Signal(메모리 후보)로 관리하고, 후속 대화에서 갱신·확정·정리",
            "현재 메모리 삭제와 앞으로의 저장 금지(Suppression)를 구분. 같은 정보가 다시 등장해도 사용자가 금지한 범위는 재저장하지 않도록 정의",
            "명시적인 저장·수정·삭제 요청과 기능 끄기를 구분하고, 설정·요약·삭제 화면 및 개인·민감정보 검사 연결"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "메모리 선별·보류·변경·삭제 기준을 일관된 제품 정책으로 확정",
            "대화 중 정보 처리와 설정·요약·삭제 화면을 연결한 개인화 메모리 흐름 설계"
          ]
        }
      ],
      "role": "메모리 저장 대상·변경·삭제 기준과 사용자 관리 흐름 설계",
      "contribution": "100%",
      "team": "디자인 1명 · 서버 개발 2명 · AI 모델 1명 · 프런트엔드 개발 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/final-ppt-9-mem_consent.png",
          "label": "첫 사용 안내",
          "caption": "첫 사용 안내",
          "wide": false,
          "width": 512,
          "height": 1054
        },
        {
          "src": "assets/final-ppt-9-mem_setting.png",
          "label": "켜기 · 끄기 · 삭제",
          "caption": "켜기 · 끄기 · 삭제",
          "wide": false,
          "width": 516,
          "height": 1044
        },
        {
          "src": "assets/final-ppt-9-mem_summary.png",
          "label": "저장된 메모리 요약",
          "caption": "저장된 메모리 요약",
          "wide": false,
          "width": 508,
          "height": 954
        },
        {
          "src": "assets/memory-planning-flow.svg",
          "label": "개인화 메모리의 저장·관리 흐름",
          "caption": "여러 대화의 정보 선별과 사용자 요청에 따른 저장·수정·삭제 기준",
          "width": 1200,
          "height": 1160,
          "wide": true
        }
      ],
      "galleryColumns": 3,
      "teamLabel": "협업 구성",
      "evidenceTitle": "사용자 관리 화면과 메모리 선별·변경·삭제 흐름",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager"
    },
    {
      "id": "case-memory-verticals",
      "company": "kakao",
      "title": "버티컬 에이전트에서 활용할 공통 메모리 기반 구축",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "장소·쇼핑 등 서비스가 바뀌어도 같은 사용자 취향·계획을 이어서 활용할 필요. 각 에이전트가 현재 요청과 관련된 메모리만 선택하고, 바뀐 조건을 우선하도록 공통 기준 마련"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "매 질문에 최신 메모리를 전달하고, 현재 요청의 추천·비교·답변 방식에 필요한 정보만 활용하도록 연결 기준 정의",
            "장소는 음식 취향·동행 조건, 쇼핑은 스타일·구매 계획을 후보 선정에 반영하는 활용 가이드 작성",
            "먼저 말을 거는 서비스(선톡)는 관심사·계획을 주제 선정에, 사주는 확인된 본인 정보와 고민을 상담 맥락에 활용하도록 정리",
            "현재 질문의 새 조건을 과거 메모리보다 우선하고, 메모리를 활용한 답변과 메모리 자체의 수정·삭제 처리를 구분"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "장소·쇼핑·선톡·사주 4개 버티컬에 적용할 메모리 전달·선별·현재 요청 우선 기준 확정",
            "연동을 위한 공통 가이드와 에이전트별 메모리 활용 예시 작성"
          ]
        }
      ],
      "role": "버티컬별 메모리 활용 기준과 공통 메모리 연계·가이드 설계",
      "team": "기획 1명",
      "originals": [
        {
          "src": "assets/hierarchy-memory-verticals.svg",
          "label": "공통 메모리와 버티컬 에이전트별 활용 기준",
          "caption": "같은 메모리를 공유하고, 현재 요청에 필요한 정보만 답변에 반영",
          "wide": true,
          "width": 1200,
          "height": 1060
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "에이전트별 메모리 활용 기준과 공통 연동 가이드",
      "contribution": "100%"
    },
    {
      "id": "case-10",
      "page": 10,
      "company": "kakao",
      "title": "대화 기반 공유형 콘텐츠 7종 구현",
      "image": "assets/evidence-hd-10.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "나와 친구의 대화 특징을 재미있게 보여주면, 결과 비교·공유로 이어질 것이라는 가설"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "말투 나이·톡방 시상식·TBTI 등 7종의 시작 질문·응답 형식·공유 결과 구현",
            "대화 근거와 점수·유형명을 함께 보여줘 나와 친구의 결과를 비교할 수 있도록 구성",
            "TBTI는 MBTI를 패러디한 대화 성향 콘텐츠로 설계하고, 관계를 단정하거나 갈등을 키우지 않는 응답 기준 반영",
            "서버·모델 변경 없이 프롬프트로 콘텐츠를 추가하고 클릭·공유 반응 비교"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "공유형 콘텐츠 클릭률 8.1% · 공유율 11.98% 기록",
            "성격 분석 클릭률 14.7%, 톡방 시상식 공유율 25.52%로 콘텐츠별 반응 확인"
          ]
        }
      ],
      "role": "공유형 콘텐츠 기획 · 응답 설계",
      "contribution": "100%",
      "team": "AI 모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/sep23-viral_age.png",
          "label": "내 톡 나이 봐줘 · 실제 카나나 응답",
          "caption": "",
          "wide": false,
          "width": 521,
          "height": 1291,
          "prompt": "내 톡 나이 봐줘",
          "ctr": "11.6%",
          "share": "15.44%"
        },
        {
          "src": "assets/sep23-viral_tbti.png",
          "label": "톡 대화로 내 성향 분석해줘 · 실제 카나나 응답",
          "caption": "",
          "wide": false,
          "width": 557,
          "height": 1291,
          "prompt": "톡 대화로 내 성향 분석해줘",
          "ctr": "14.7%",
          "share": "11.25%"
        },
        {
          "src": "assets/sep23-viral_award.png",
          "label": "톡방 시상식 해줘 · 실제 카나나 응답",
          "caption": "",
          "wide": false,
          "width": 435,
          "height": 1291,
          "prompt": "톡방 시상식 해줘",
          "ctr": "2.8%",
          "share": "25.52%"
        }
      ],
      "galleryColumns": 3,
      "responseExamples": true,
      "teamLabel": "협업 구성",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "shareLabel": "공유율",
      "position": "AI Product Manager"
    },
    {
      "id": "case-11",
      "page": 11,
      "company": "samsung",
      "title": "대출 상태 시각화와 상황별 행동 유도로 대출 화면 재설계",
      "image": "assets/evidence-hd-11.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "대출 가능 금액·담보 부족 상태와 필요한 다음 행동을 찾기 어려운 메뉴 중심 화면. 상태와 필요한 행동을 한눈에 확인하도록 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "대출 가능 금액 · 담보 비율을 바 차트로 시각화",
            "사용자 상황에 필요한 기능을 우선 노출",
            "불필요한 메뉴를 숨겨 정보 탐색 부담 축소",
            "담보 부족과 대출 연장 시점을 알리는 기능 추가"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "메뉴 9개 나열에서 상태 요약 · 핵심 행동 중심으로 재구성",
            "만기 임박 · 담보 부족을 먼저 알려 연장 · 상환 행동으로 연결",
            "대출 금액 · 담보 비율을 한 화면에서 확인하는 구조"
          ]
        }
      ],
      "role": "제품 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 4명 · 데이터 분석 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/sep23-integrated-9-image13.png",
          "label": "개선 전",
          "caption": "개선 전",
          "wide": false,
          "width": 739,
          "height": 1608
        },
        {
          "src": "assets/sep23-integrated-9-image14.png",
          "label": "개선 후",
          "caption": "개선 후",
          "wide": false,
          "width": 715,
          "height": 1608
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "협업 구성",
      "evidenceTitle": "대출 정보 탐색 화면의 개선 전 · 후",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리"
    },
    {
      "id": "case-12",
      "page": 12,
      "company": "toss",
      "title": "보험 상담 신청 경로 개선으로 매출 121% 성장",
      "image": "assets/evidence-hd-12.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "유입 채널·신청 경로별 전환 차이에서 병목을 찾고, 보험 상담 수요가 실제 신청과 매출로 이어지도록 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "유입 채널·소재·상담 신청 경로별 전환 데이터를 분석해 개선 지점 도출",
            "신청 경로 개선 가설을 세우고 채널·소재별 실험 기획",
            "채널·소재·신청 경로별 실험 결과를 비교해 효과적인 개선안 반영"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "상담 신청 경로 개선 전 대비 매출 121% 증가(2024.08 기준)",
            "보험 상담 신청 목표 달성률 최대 152%"
          ]
        }
      ],
      "role": "제품 총괄 및 실험 · 서비스 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 2명 · 데이터 분석 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/sep23-image1.png",
          "label": "보험 상담 신청 경로 개선으로 매출 121% 성장",
          "caption": "보험 상담 신청 경로 개선으로 매출 121% 성장",
          "wide": true,
          "width": 2012,
          "height": 882
        }
      ],
      "galleryColumns": 1,
      "teamLabel": "협업 구성",
      "evidenceTitle": "보험 상담 신청 목표 달성 추이",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "보험 Product Owner"
    },
    {
      "id": "case-13",
      "page": 13,
      "company": "toss",
      "title": "관리 중심 보험 홈 개편으로 이탈 22% 감소",
      "image": "assets/evidence-hd-13.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "광고 중심의 보험 홈과 달리 사용자는 보유 보험 확인·분석을 원해 광고 영역 클릭률이 낮았음. 보험 관리 경험을 혜택·상담 이용으로 연결"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "사용자 인터뷰와 이용 데이터로 핵심 수요 확인",
            "보험 확인 · 분석 기능에 쉽게 접근하는 정보 구조 설계",
            "관리 기능과 보험 혜택 · 상담을 연결하는 화면 기획",
            "개편 후 이탈과 주요 기능의 전환 지표 확인"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "보험 홈 이탈 사용자 22% 감소",
            "보험 혜택 서비스 전환율 38% 증가",
            "보험 상담 신청 전환율 15% 증가"
          ]
        }
      ],
      "role": "제품 총괄 및 실험 · 서비스 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 2명 · 데이터 분석 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-image2.png",
          "label": "관리 중심 보험 홈 개편으로 이탈 22% 감소",
          "caption": "관리 중심 보험 홈 개편으로 이탈 22% 감소",
          "wide": false,
          "width": 811,
          "height": 1085
        },
        {
          "src": "assets/claude-image3.png",
          "label": "관리 중심 보험 홈 개편으로 이탈 22% 감소",
          "caption": "관리 중심 보험 홈 개편으로 이탈 22% 감소",
          "wide": false,
          "width": 1237,
          "height": 1035
        },
        {
          "src": "assets/claude-image4.png",
          "label": "관리 중심 보험 홈 개편으로 이탈 22% 감소",
          "caption": "관리 중심 보험 홈 개편으로 이탈 22% 감소",
          "wide": true,
          "width": 2189,
          "height": 1713
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "협업 구성",
      "evidenceTitle": "보험 홈 이용 분석과 개선 화면",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "보험 Product Owner"
    },
    {
      "id": "case-14",
      "page": 14,
      "company": "toss",
      "title": "퍼널 병목 개선으로 대출 전환율 8배 · 매출 28배",
      "image": "assets/evidence-hd-14.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "서비스 진입부터 신청·실행까지 단계별 이탈 발생. 어떤 병목을 먼저 고칠지 데이터와 사용자 인터뷰로 판단할 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "단계별 전환·신청·실행 데이터와 정기 인터뷰로 사용자가 멈추는 지점과 원인 분석",
            "주택 검색·금리 비교·상담 신청 등 단계별 병목을 우선 개선 과제로 정의",
            "문제 성격에 따라 화면·정보 노출 실험과 금융사·제휴 상품 확대로 해결 방식 선택",
            "실험·연동 결과를 확인해 다음 개선 과제와 제품 요구사항에 반영"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "개선 전 대비 진입→최종 전환율 8배 상승",
            "개선 전 대비 매출 28배 증가"
          ]
        }
      ],
      "role": "대출 제품 전략·전환 과정 개선 총괄",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-fig_toss_funnel.png",
          "label": "퍼널 단계마다 병목을 찾아 개선한 과제와 결과",
          "caption": "퍼널 단계마다 병목을 찾아 개선한 과제와 결과",
          "wide": true,
          "width": 2000,
          "height": 900
        },
        {
          "src": "assets/claude-s9_orig0.jpg",
          "label": "퍼널 단계마다 병목을 찾아 개선한 과제와 결과",
          "caption": "퍼널 단계마다 병목을 찾아 개선한 과제와 결과",
          "wide": false,
          "width": 1023,
          "height": 586
        },
        {
          "src": "assets/sep23-s9_orig1.jpeg",
          "label": "퍼널 단계마다 병목을 찾아 개선한 과제와 결과",
          "caption": "퍼널 단계마다 병목을 찾아 개선한 과제와 결과",
          "wide": false,
          "width": 1265,
          "height": 547
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "협업 구성",
      "evidenceTitle": "퍼널 단계마다 병목을 찾아 개선한 과제와 결과",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner"
    },
    {
      "id": "case-15",
      "page": 15,
      "company": "toss",
      "title": "금융사 22곳 연동 · 신청 대비 실행률 6배 개선",
      "image": "assets/evidence-hd-15.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "다양한 금융사 상품을 연결해 사용자 선택지를 확대하고, 금융사별 정책 · 연동 차이로 생기는 신청 이후의 실행 장벽을 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "금융사 연동을 위한 표준 API 설계",
            "제휴사의 운영 · 개발 담당자와 정책 및 이슈 협의",
            "제품 QA와 실제 환경 테스트 진행",
            "제휴사별 연동 일정 · 개발 리소스 조율"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "금융사 약 22곳 연동",
            "대출 신청 대비 실행률 6배 개선"
          ]
        }
      ],
      "role": "제품 총괄 및 금융사 연동 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-fig_toss_partner.png",
          "label": "표준 API로 금융사를 연결하고 실행 장벽을 줄인 구조",
          "caption": "표준 API로 금융사를 연결하고 실행 장벽을 줄인 구조",
          "wide": true,
          "width": 2000,
          "height": 980
        },
        {
          "src": "assets/claude-s10_orig0.png",
          "label": "표준 API로 금융사를 연결하고 실행 장벽을 줄인 구조",
          "caption": "표준 API로 금융사를 연결하고 실행 장벽을 줄인 구조",
          "wide": false,
          "width": 1747,
          "height": 837
        },
        {
          "src": "assets/claude-s10_orig1.jpg",
          "label": "표준 API로 금융사를 연결하고 실행 장벽을 줄인 구조",
          "caption": "표준 API로 금융사를 연결하고 실행 장벽을 줄인 구조",
          "wide": false,
          "width": 789,
          "height": 671
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "협업 구성",
      "evidenceTitle": "표준 API로 금융사를 연결하고 실행 장벽을 줄인 구조",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner"
    },
    {
      "id": "case-16",
      "page": 16,
      "company": "toss",
      "title": "개발 우선순위·일정·리소스 관리",
      "image": "assets/slide-16.png",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "여러 제품 과제의 병행에 따른 우선순위 조율 필요",
            "과제별 의존성과 담당 리소스의 명확화",
            "계획한 일정 내 과제 완료를 위한 실행 관리"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "요구사항을 정리하고 과제별 우선순위 설정",
            "일정 계획과 담당 리소스 배정",
            "주간·일일 스크럼으로 진행 상황과 이슈 점검",
            "일정 변경과 병렬 작업 범위를 팀에 공유"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "팀이 우선순위와 병렬 수행 범위를 공유하도록 정리",
            "과제별 진행 상황과 지연 요인을 확인하는 체계 운영",
            "계획한 일정 내 프로젝트 완료율 개선"
          ]
        }
      ],
      "role": "제품 총괄·프로젝트 진행 관리",
      "contribution": "100%",
      "team": "디자인 · 개발 · 데이터 분석 · 사업개발",
      "position": "Product Owner",
      "originals": [
        {
          "src": "assets/restored-toss-priority.png",
          "label": "개발 과제의 우선순위와 담당 배정",
          "caption": "개발 과제의 우선순위·일정·담당 배정",
          "wide": true,
          "width": 886,
          "height": 877
        },
        {
          "src": "assets/restored-toss-progress.png",
          "label": "프로젝트 진행 상황 공유",
          "caption": "진행·검토·완료 상태와 지연 요인 공유",
          "wide": true,
          "width": 1309,
          "height": 568
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "우선순위·담당 배정과 진행 현황 관리",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리"
    },
    {
      "id": "case-17",
      "page": 17,
      "company": "toss",
      "title": "온라인 대환대출 인프라 연계 주택담보대출 갈아타기 출시",
      "image": "assets/evidence-hd-17.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "정부 대환대출 인프라와 제휴 금융사의 요건을 반영해, 기존 대출 조회·비교·갈아타기 신청을 하나의 사용자 흐름으로 연결할 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "정부 · 제휴사 요구사항을 제품 정책에 반영",
            "사용자 인터뷰로 갈아타기 과정의 불편 파악",
            "서비스 흐름과 상세 기능 설계",
            "디자인 · 개발 · 제휴사와 출시 및 운영 협업"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "주택담보대출 갈아타기 서비스 출시",
            "비교부터 신청까지 이어지는 사용자 경험 구현"
          ]
        }
      ],
      "role": "제품 총괄 및 서비스 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-image11.png",
          "label": "온라인 대환대출 인프라 연계 주택담보대출 갈아타기 출시",
          "caption": "온라인 대환대출 인프라 연계 주택담보대출 갈아타기 출시",
          "wide": false,
          "width": 1080,
          "height": 2116
        },
        {
          "src": "assets/sep23-image12.png",
          "label": "온라인 대환대출 인프라 연계 주택담보대출 갈아타기 출시",
          "caption": "온라인 대환대출 인프라 연계 주택담보대출 갈아타기 출시",
          "wide": false,
          "width": 888,
          "height": 1664
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "협업 구성",
      "evidenceTitle": "주택담보대출 갈아타기 서비스 화면",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner"
    },
    {
      "id": "case-18",
      "page": 18,
      "company": "toss",
      "title": "규제 샌드박스로 6개월 만에 혁신금융서비스 지정",
      "image": "assets/evidence-hd-18.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "주택담보대출의 낮은 온라인 이용 비중과 대출 모집인 중심의 오프라인 유통 구조에서 온라인 비교 · 중개 서비스 기회를 발견"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "시장 지표와 대출 상담·모집 구조를 분석해 온라인 중개 기회 검토",
            "재위탁 규제 쟁점에 맞춘 규제특례 신청서 작성과 서비스 모델·소비자 편익 구체화",
            "심사위원회 발표와 법무·대관·금융소비자보호 담당자 협업으로 심사 대응"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "신청 6개월 만에 혁신금융서비스 지정",
            "온라인 대출 모집인 중개 모델의 제도적 기반 확보"
          ]
        }
      ],
      "role": "서비스 모델·규제특례 신청서 작성, 심사위원회 발표와 심사 대응 주도",
      "contribution": "100%",
      "team": "법무 1명 · 대관 1명 · 금융소비자보호 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-fig_toss_sandbox.png",
          "label": "오프라인 모집인 중개를 온라인 비교로 바꾼 신규 모델",
          "caption": "오프라인 모집인 중개를 온라인 비교로 바꾼 신규 모델",
          "wide": true,
          "width": 2000,
          "height": 890
        },
        {
          "src": "assets/sep23-s13_orig0.png",
          "label": "오프라인 모집인 중개를 온라인 비교로 바꾼 신규 모델",
          "caption": "오프라인 모집인 중개를 온라인 비교로 바꾼 신규 모델",
          "wide": false,
          "width": 990,
          "height": 450
        },
        {
          "src": "assets/claude-s13_orig1.jpeg",
          "label": "오프라인 모집인 중개를 온라인 비교로 바꾼 신규 모델",
          "caption": "오프라인 모집인 중개를 온라인 비교로 바꾼 신규 모델",
          "wide": false,
          "width": 611,
          "height": 470
        },
        {
          "src": "assets/claude-s13_orig2.jpeg",
          "label": "오프라인 모집인 중개를 온라인 비교로 바꾼 신규 모델",
          "caption": "오프라인 모집인 중개를 온라인 비교로 바꾼 신규 모델",
          "wide": false,
          "width": 599,
          "height": 465
        }
      ],
      "galleryColumns": 3,
      "teamLabel": "협업 구성",
      "evidenceTitle": "오프라인 모집인 중개를 온라인 비교로 바꾼 신규 모델",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner"
    },
    {
      "id": "case-19",
      "page": 19,
      "company": "toss",
      "title": "주택 검색 이탈 원인 분석으로 전환율 11%p 상승",
      "image": "assets/evidence-hd-19.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "주택 검색 단계 이탈률 28%. 이탈 사용자 중 72%가 KB시세 없는 신축 아파트를 검색한 사실 확인"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "검색 로그를 추출해 이탈 주택과 원인 분석",
            "시세 정보 부재로 대출이 막히는 수요를 정의",
            "KB시세 없는 주택을 취급하는 제휴사 발굴",
            "해당 주택의 대출을 지원하도록 상품 연동"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "주택 검색 단계 전환율 11%p 상승",
            "기존에 수용하지 못한 신축 주택 수요 확보"
          ]
        }
      ],
      "role": "제품 총괄 및 데이터 분석 · 제휴 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/sep23-image16.jpg",
          "label": "주택 검색 이탈 원인 분석으로 전환율 11%p 상승",
          "caption": "주택 검색 이탈 원인 분석으로 전환율 11%p 상승",
          "wide": true,
          "width": 1889,
          "height": 1914
        }
      ],
      "galleryColumns": 1,
      "teamLabel": "협업 구성",
      "evidenceTitle": "주택 검색 단계 개선 전 · 후의 퍼널 전환",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner"
    },
    {
      "id": "case-20",
      "page": 20,
      "company": "toss",
      "title": "후순위 대출 제휴로 서비스 매출의 최대 28% 창출",
      "image": "assets/evidence-hd-20.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "상담을 신청해도 대출 실행으로 이어지지 않는 원인을 분석한 결과, 미실행 사용자 34%가 대출 한도 때문에 진행하지 못한 사실을 확인"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "제휴사 콜센터 상담 데이터 수천 건 분석",
            "상담 이후 미실행 사유를 유형별로 분류",
            "당시 담보가치의 최대 90%까지 대출하고 소득 대비 상환 비율(DSR) 제약을 받지 않는 후순위 상품 발굴·연동",
            "제휴 상품을 서비스에 연동하고 성과 확인"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "후순위 대출 취급 금융사 3개 연동",
            "담당 대출 서비스 매출에서 후순위 제휴사 비중 최대 28%"
          ]
        }
      ],
      "role": "제품 총괄 및 제휴 상품 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/sep23-image17.png",
          "label": "후순위 대출 제휴로 전체 매출의 최대 28% 창출",
          "caption": "후순위 대출 제휴로 전체 매출의 최대 28% 창출",
          "wide": true,
          "width": 782,
          "height": 1601
        }
      ],
      "galleryColumns": 1,
      "teamLabel": "협업 구성",
      "evidenceTitle": "상담 분석을 바탕으로 확대한 대출 상품",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner"
    },
    {
      "id": "case-21",
      "page": 21,
      "company": "toss",
      "title": "시장 금리 비교 정보로 최종 전환율 22% 상승",
      "image": "assets/evidence-hd-21.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "제휴 상품의 금리가 낮아져도 사용자가 경쟁력을 체감하지 못해 전환이 기대에 못 미침. 시장 금리와의 비교 정보로 선택 지원"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "공시된 시중 평균 금리를 비교 기준으로 활용",
            "기존 화면과 금리 비교 정보를 추가한 실험안 설계",
            "A/B 테스트로 사용자 반응과 최종 전환율 비교",
            "효과가 확인된 비교 정보 노출 방식 적용"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "최종 전환율 22% 상승"
          ]
        }
      ],
      "role": "제품 총괄 및 A/B 실험 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/sep23-image18.png",
          "label": "시장 금리 비교 정보로 최종 전환율 22% 상승",
          "caption": "시장 금리 비교 정보로 최종 전환율 22% 상승",
          "wide": true,
          "width": 1734,
          "height": 1648
        }
      ],
      "galleryColumns": 1,
      "teamLabel": "협업 구성",
      "evidenceTitle": "금리 비교 정보를 추가한 A/B 테스트 실험안",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner"
    },
    {
      "id": "case-22",
      "page": 22,
      "company": "toss",
      "title": "쉬운 금융 용어 안내로 목적 인지율 62%→87%",
      "image": "assets/evidence-hd-22.png?v=20260922-results",
      "sections": [
        {
          "title": "대출 목적을 쉬운 표현으로 안내",
          "items": [
            "‘대환’이라는 용어로 생기는 오해를 줄이고 신용대출 상환에 맞는 ‘생활자금’ 선택 유도",
            "생활자금 대출 클릭 약 5% 증가"
          ]
        },
        {
          "title": "금융사 정보의 신뢰도 보완",
          "items": [
            "1금융권 여부를 알 수 있도록 은행 목록에 배지 표시",
            "상담 신청 비중 9% 증가"
          ]
        },
        {
          "title": "이용 가능한 대출 목적 안내",
          "items": [
            "주택 구입 외에도 생활자금 등으로 이용할 수 있다는 정보를 시작 화면에 안내",
            "목적 인지율 62%에서 87%로 상승"
          ]
        }
      ],
      "role": "사용자 관점의 금융 용어·정보 안내 개선, 실험 기획",
      "contribution": "100%",
      "team": "",
      "caption": null,
      "galleryColumns": 3,
      "originals": [
        {
          "src": "assets/sep23-image21.png",
          "label": "대출 목적 안내 개선 전 · 후",
          "caption": "대출 목적 안내 개선 전 · 후",
          "wide": false,
          "width": 1606,
          "height": 1416
        },
        {
          "src": "assets/financial-term-image19.png",
          "label": "금융사 정보의 신뢰도 보완",
          "caption": "금융사 정보의 신뢰도 보완",
          "wide": false,
          "width": 1080,
          "height": 2116
        },
        {
          "src": "assets/financial-term-image20.png",
          "label": "이용 가능한 대출 목적 안내",
          "caption": "이용 가능한 대출 목적 안내",
          "wide": false,
          "width": 1080,
          "height": 2116
        }
      ],
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner"
    },
    {
      "id": "case-23",
      "page": 23,
      "company": "nhn",
      "title": "국내외 광고 플랫폼 31곳 연동으로 거래 네트워크 확대",
      "image": "assets/evidence-hd-23.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "광고 거래에 참여하는 매체와 광고주 네트워크를 확대하고, 파트너 연동부터 운영 · 정산까지 안정적으로 관리할 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "국내외 매체 공급 플랫폼(SSP)·광고주 플랫폼(DSP)에 제휴 제안과 계약 협의",
            "파트너 계약서와 기술 검토 자료 작성",
            "연동 후 양사 데이터를 비교하고 정산 금액 검토",
            "성과를 모니터링하며 매체 비용 · 클릭률 이슈 대응"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "매체 측 플랫폼(SSP) 16곳 연동",
            "광고주 측 플랫폼(DSP) 15곳 파트너십 · 연동"
          ]
        }
      ],
      "role": "파트너 제휴 · 연동 · 운영 기획",
      "contribution": "100%",
      "team": "기획 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-fig_nhn_adx.png",
          "label": "매체와 광고주를 연결하는 광고 거래 네트워크",
          "caption": "매체와 광고주를 연결하는 광고 거래 네트워크",
          "wide": true,
          "width": 2000,
          "height": 820
        },
        {
          "src": "assets/sep23-s19_orig0.jpg",
          "label": "매체와 광고주를 연결하는 광고 거래 네트워크",
          "caption": "매체와 광고주를 연결하는 광고 거래 네트워크",
          "wide": false,
          "width": 976,
          "height": 677
        },
        {
          "src": "assets/claude-s19_orig1.jpg",
          "label": "매체와 광고주를 연결하는 광고 거래 네트워크",
          "caption": "매체와 광고주를 연결하는 광고 거래 네트워크",
          "wide": false,
          "width": 822,
          "height": 665
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "수행",
      "evidenceTitle": "매체와 광고주를 연결하는 광고 거래 네트워크",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리"
    },
    {
      "id": "case-24",
      "page": 24,
      "company": "nhn",
      "title": "매체 효율 관리로 연 1.2억 원 절감 · 앱 매체 매출 최대 30% 증가",
      "image": "assets/evidence-hd-24.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "부정 트래픽으로 낭비되는 매체 비용을 줄이고, 매체별 수익 기준값을 조정해 광고 매출 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "광고 식별자별 과다 요청 · 비정상 클릭률 등 부정 트래픽 탐지 기준 운영",
            "부정 매체에 공문 · 근거 자료를 전달하고 해당 매체비 환수",
            "노출 1,000회당 수익(eCPM) 기준값을 10~30%씩 조정하며 매출 최대 지점 탐색",
            "기준값 변경 후 광고 송출률과 매출을 함께 모니터링"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "부정 매체 적발로 연 1.2억 원 비용 절감",
            "eCPM 기준값 조정으로 앱 매체 월 매출 최대 30% 증가"
          ]
        }
      ],
      "role": "광고 플랫폼 운영 및 매체 수익 관리 기획",
      "contribution": "100%",
      "team": "기획 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/sep23-fig_nhn_fraud.png",
          "label": "부정 트래픽 차단과 수익 기준 조정의 두 갈래 개선",
          "caption": "부정 트래픽 차단과 수익 기준 조정의 두 갈래 개선",
          "wide": true,
          "width": 2257,
          "height": 846
        },
        {
          "src": "assets/claude-s20_orig0.png",
          "label": "부정 트래픽 차단과 수익 기준 조정의 두 갈래 개선",
          "caption": "부정 트래픽 차단과 수익 기준 조정의 두 갈래 개선",
          "wide": false,
          "width": 1530,
          "height": 849
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "수행",
      "evidenceTitle": "부정 트래픽 차단과 수익 기준 조정의 두 갈래 개선",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리"
    },
    {
      "id": "case-25",
      "page": 25,
      "company": "nhn",
      "title": "광고 성과를 한곳에서 확인하는 운영 화면 구축",
      "image": "assets/evidence-hd-25.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "엑셀로 수기 관리하던 캠페인 지표를 통합 조회하고, 성과 파악과 문제 대응 시간을 줄이는 운영 화면 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "영업 · 운영 부서의 요구사항과 필요한 지표 정리",
            "전환까지의 노출 · 클릭 빈도를 리포트에 제공해 캠페인 설정 지원",
            "전일 · 전전일 같은 시각의 광고비로 당일 예산 미소진 가능성 표시",
            "지표별 데이터 소스 · 추출 조건과 화면 설계, 디자인 · 개발 협업"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "캠페인 성과와 운영 지표를 통합 조회하는 모니터링 화면 구축",
            "예산 미소진 가능성을 미리 파악하는 지표로 운영 대응 지원"
          ]
        }
      ],
      "role": "운영 화면 기획·지표·데이터 정의",
      "contribution": "100%",
      "team": "서버 개발 2명 · 프런트엔드 개발 1명 · 디자인 1명",
      "caption": null,
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "originals": [
        {
          "src": "assets/final-ppt-24-fig_nhn_admin.png",
          "label": "엑셀 수기 관리에서 통합 모니터링 화면으로 전환",
          "caption": "",
          "width": 2257,
          "height": 800,
          "wide": true
        },
        {
          "src": "assets/final-ppt-24-nhn_admin.jpg",
          "label": "운영 어드민 설계 자료",
          "caption": "",
          "width": 933,
          "height": 703,
          "wide": false,
          "heading": "실제 업무 자료"
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "엑셀 수기 관리에서 통합 모니터링 화면으로 전환"
    },
    {
      "id": "case-26",
      "page": 26,
      "company": "nhn",
      "title": "검색 관심사 기반 맞춤 광고 상품 출시",
      "image": "assets/evidence-hd-26.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "자사 데이터 관리 플랫폼(DMP)의 네이버·카카오 검색 키워드를 이베이 광고에 활용할 데이터 상품으로 연결",
            "이베이의 인기 · 급상승 · 시즌 키워드와 매칭해 구매 관심사에 맞는 광고 집행 지원"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "분석 대상 웹 트래픽 5억 건 중 약 2,500만 건의 키워드 매칭 가능성을 확인해 사업성 검토",
            "검색어를 이베이 기준 키워드로 통합하고 최근 30일 데이터 적재 정책 수립",
            "최근 7일 검색 이력을 관심사별로 묶고 최신성 · 빈도를 점수화해 쿠키별 최상위 키워드 1개 선정",
            "최신성 · 빈도 테스트 결과를 반영해 두 요소의 비중을 균등하게 설정"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "검색 키워드 기반 타기팅 광고 상품 출시",
            "쿠키별 최상위 관심사 키워드를 이베이 광고에 활용하는 전달 체계 마련",
            "전일 데이터 기반 테스트를 바탕으로 실시간 데이터 활용을 후속 개선 방향으로 도출"
          ]
        }
      ],
      "role": "사업성 검토 · 키워드 매칭 및 점수화 정책 기획",
      "contribution": "70%",
      "team": "기획 2명 · 분석 1명 · 데이터 엔지니어 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/keyword-user-context.svg",
          "width": 960,
          "height": 1020,
          "label": "한 사용자의 검색 기록으로 관심사 키워드 1개를 선정하는 과정",
          "wide": true
        }
      ],
      "galleryColumns": 1
    },
    {
      "id": "case-27",
      "page": 27,
      "company": "nhn",
      "title": "외부 DSP 입찰 참여 확대로 매출 78% 성장",
      "image": "assets/evidence-hd-27.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "매체의 광고 요청이 내부 광고주 플랫폼(DSP)에만 연결돼, 늘어난 외부 광고주 수요를 매출로 연결하기 어려운 거래 구조 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "내부 DSP 대표를 먼저 선정하고 외부 DSP와 다시 경쟁하는 2단계 입찰 구조 기획",
            "입찰 로그로 구조 변경에 따른 매출 시뮬레이션",
            "가격 조정안 9개를 비교해 기존 매출 손실 여부와 추가 수익을 검토하고 입찰 정책 선정",
            "최저 입찰가 · 낙찰 정책 수립과 실제 서비스 적용"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "입찰률 3% 미만에서 10% 내외로 증가",
            "외부 DSP 매출 2.8억 원에서 5억 원으로 전년 동월 대비 78% 성장",
            "해외 트래픽까지 거래할 수 있는 구조 확보"
          ]
        }
      ],
      "role": "거래 구조·프로세스·정책 기획",
      "contribution": "70%",
      "team": "서버 개발 · 데이터 엔지니어 2명 · 프런트엔드 개발 1명 · 디자인 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/final-ppt-26-fig_nhn_dsp.png",
          "label": "외부 DSP까지 참여하는 2차 입찰 구조로 전환",
          "caption": "",
          "width": 2257,
          "height": 900,
          "wide": true
        },
        {
          "src": "assets/final-ppt-26-exchange_flow.jpeg",
          "label": "입찰 요청과 응답 흐름 설계 자료",
          "caption": "",
          "width": 1014,
          "height": 510,
          "wide": false,
          "heading": "실제 업무 자료"
        }
      ],
      "galleryColumns": 1,
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "evidenceTitle": "외부 DSP까지 참여하는 2차 입찰 구조로 전환"
    },
    {
      "id": "case-28",
      "page": 28,
      "company": "nhn",
      "title": "광고주 행동 데이터 분석·컨설팅",
      "image": "assets/evidence-hd-28.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "광고주가 유입 이후 사용자 행동과 광고 반응을 파악할 수 있는 맞춤 분석 수요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "광고주의 사용자 행동 가설과 검증에 필요한 지표 정의",
            "사용자 행동·광고 반응 데이터를 SQL로 추출·가공해 가설 검증",
            "분석 결과에 따른 광고 운영 개선안과 광고주별 맞춤 리포트 제공"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "데이터 분석을 바탕으로 광고 집행 금액 확대",
            "맞춤 리포트 제공을 통한 추가 수익 창출"
          ]
        }
      ],
      "role": "분석 기획·인사이트 도출·리포트 작성",
      "contribution": "100%",
      "team": "데이터 분석가 1명",
      "caption": null,
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "originals": [
        {
          "src": "assets/sep23-extra-image32.jpeg",
          "width": 1273,
          "height": 1054,
          "label": "광고주 행동 데이터 분석·컨설팅",
          "caption": "광고주 행동 데이터 분석·컨설팅",
          "wide": true
        }
      ],
      "galleryColumns": 1
    },
    {
      "id": "case-29",
      "page": 29,
      "company": "socialup",
      "title": "국내 최초 SNS 광고 오픈마켓 창업, 시드 2억 원 유치",
      "image": "assets/evidence-hd-29.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "광고주가 인플루언서에게 가격을 개별 문의하고 선입금해야 하는 불편 확인. 거래와 성과 확인을 지원하는 광고 오픈마켓 기획"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "광고주 약 100명을 만나 수요와 시장성 검증",
            "요구사항을 반영한 웹 서비스 설계 · 구축",
            "광고 거래 · 에스크로 · 성과 리포트 기능 기획",
            "광고주와 인플루언서 유입 마케팅 및 운영 개선"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "국내 최초 SNS 광고 오픈마켓 출시",
            "시드 투자 2억 원 유치 · 인플루언서 1,300명 확보",
            "세션당 페이지 수와 이용 시간 3배 이상 개선"
          ]
        }
      ],
      "role": "서비스 기획 · 출시 · 운영 총괄",
      "contribution": "100%",
      "team": "기획 1명 · 디자인 1명 · 풀스택 개발 3명",
      "caption": null,
      "teamLabel": "협업 구성",
      "evidenceTitle": "광고 거래 · 관리 · 리포트 서비스 화면",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "originals": [
        {
          "src": "assets/sep23-image33.png",
          "label": "광고 오픈마켓 메인 화면",
          "caption": "광고 오픈마켓 메인 화면",
          "wide": false,
          "width": 1419,
          "height": 793
        },
        {
          "src": "assets/sep23-image35.png",
          "label": "광고 거래 화면",
          "caption": "광고 거래 화면",
          "wide": false,
          "width": 3180,
          "height": 2051
        },
        {
          "src": "assets/sep23-image37.png",
          "label": "캠페인 관리 화면",
          "caption": "캠페인 관리 화면",
          "wide": false,
          "width": 1056,
          "height": 1553
        },
        {
          "src": "assets/sep23-image39.png",
          "label": "성과 리포트 화면",
          "caption": "성과 리포트 화면",
          "wide": false,
          "width": 1314,
          "height": 1292
        },
        {
          "src": "assets/sep23-image40.png",
          "label": "광고 운영 화면",
          "caption": "광고 운영 화면",
          "wide": false,
          "width": 1300,
          "height": 1433
        }
      ],
      "galleryColumns": 2
    }
  ],
  "kakaoProjects": [
    {
      "id": "case-9",
      "title": "개인화 메모리 에이전트 구축·출시 준비",
      "intro": "한 번 알려준 취향·계획·답변 선호를 다음 대화와 다른 서비스에서도 활용하기 위한 개인화 메모리. 저장·수정·삭제 기능부터 프롬프트·평가와 에이전트별 활용 기준까지 설계",
      "role": "개인화 메모리의 제공 범위와 출시 준비 총괄, 저장·관리 정책과 프롬프트·평가 개선",
      "outcomes": [
        {
          "value": "개인화 메모리 출시 준비",
          "label": "메모리 저장·관리 기능과 오류 검증 체계, 4개 에이전트의 활용 기준 마련"
        }
      ],
      "detailIds": [
        "case-9",
        "case-agent-quality",
        "case-memory-verticals"
      ],
      "labels": [
        "기능·정책 설계",
        "프롬프트·메모리 처리 개선",
        "버티컬 에이전트 활용 확장"
      ],
      "challenge": "한 번 설명한 취향과 상황도 서비스가 달라지면 다시 알려줘야 하는 불편. AI의 추천이나 추측을 사용자 사실로 잘못 저장할 위험",
      "approach": "무엇을 저장하고 어떻게 고치고 지울지 정한 뒤, 여러 서비스가 같은 메모리에서 필요한 정보만 활용하도록 기준 수립. 시나리오·실대화에서 찾은 오류를 프롬프트 수정과 재검증으로 개선"
    },
    {
      "id": "case-5",
      "title": "카카오톡 대화에서 답을 찾는 AI, 서버 분석 첫 도입·출시",
      "intro": "기존 온디바이스 분석과 구분되는 서버 분석을 대화연동에 처음 도입. 카카오톡 대화 선택·업로드·분석과 원래 질문의 답변을 연결한 서비스",
      "role": "실제 대화량에 따른 초기 제공 범위 결정과 서버 분석 출시 총괄, 조회·처리 범위의 단계적 확장",
      "outcomes": [
        {
          "value": "서버 분석 첫 도입·출시",
          "label": "대화 업로드부터 분석·후속 질문까지의 제품 흐름을 구축하고, 출시 후 모델·입력·처리 방식 고도화"
        }
      ],
      "detailIds": [
        "case-5",
        "case-8",
        "case-7",
        "case-6",
        "case-10"
      ],
      "labels": [
        "서버 분석 첫 설계",
        "모델·프롬프트 개선",
        "대화 탐색 확대",
        "대량 대화 처리",
        "공유 콘텐츠 확장"
      ],
      "challenge": "사용자가 대화가 오간 방과 날짜를 기억해 직접 찾아야 하는 탐색 부담. 질문만으로 일정·기억·관계를 확인하는 경험 목표",
      "approach": "초기 출시 범위·우선순위 결정과 질문→대화 선택→분석→답변의 전 과정 주도. 이용 데이터에 따라 탐색 범위를 넓히고 분석 품질·공유 경험 고도화"
    }
  ]
};

const PORTFOLIO = {
  "companies": [
    {
      "key": "kakao",
      "name": "카카오",
      "role": "카나나 AI Product Manager",
      "period": "2025.12.01 ~ 현재",
      "duration": "약 11개월",
      "start": 5,
      "end": 10,
      "intro": "대화연동 에이전트·개인화 메모리의 제품 전략·출시 범위·우선순위 관리와 모델·정책·품질 고도화"
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
      "intro": "광고 플랫폼 연동, 데이터 상품과 운영 효율 개선",
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
      "title": "대화 선택·서버 분석 이후 원래 질문으로 이어지는 실행 흐름",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "카카오톡 속 일정·기억·관계를 찾는 질문을, 채팅방 선택과 대화 업로드·서버 분석을 거쳐 하나의 답변으로 연결하는 초기 제품 경험 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "사용자 질문→분석 대상 확인→대화 업로드→서버 분석→원래 질문 응답의 단계별 동작 정의",
            "사용자 선택을 받기 전의 질문과 분석 완료 결과를 연결해 중단된 응답을 재개하는 흐름 설계",
            "새 질문·후속 질문에 따라 대상·조회 범위를 구분하고, 같은 맥락의 추가 질문은 이전 선택 범위로 다시 분석",
            "동의·원문 삭제, 이탈·재진입·분석 만료·재시도 기준을 전 과정에 반영"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "요청 유형 8종과 대화 선택부터 답변까지 MVP 실행 정책 확정",
            "추가 질문은 3시간 내 채팅방·기간을 다시 고르지 않고 재분석하며, 범위 변경·만료 시 재선택하는 흐름 정립"
          ]
        }
      ],
      "role": "제품 실행·대화 맥락·사용자 동의 및 복구 정책 설계",
      "contribution": "100%",
      "team": "디자인 1명 · 클라 2명 · 서버 2명 · 모델 1명 · FE 1명",
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
      "evidenceTitle": "과거 대화를 찾아 분석하는 MVP 사용자 흐름",
      "disclaimer": "피그마 · 정책서의 초기 시안",
      "position": "AI Product Manager"
    },
    {
      "id": "case-token-budget",
      "company": "kakao",
      "title": "실제 대화량을 기준으로 정한 입력 형식·토큰 배분 정책",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "짧은 메시지가 많이 오가는 카카오톡 대화에서, 입력 한도 안에 여러 채팅방의 근거를 함께 담을 수 있는 서비스 범위와 데이터 구성 기준 수립"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "말풍선 수·길이뿐 아니라 화자·시간·날짜 등 메타데이터 비용을 실측해 채팅 유형·대화량별 분석 범위 산정",
            "실측 토큰 변환율과 안전 여유분을 반영해 최대 4개 방·기본 2주의 초기 이용 범위 설정",
            "반복되는 JSON 필드를 간결한 플랫텍스트로 변환하는 입력 방식 제안·비교",
            "최신순·대화량 비율·균등 배분의 근거 누락과 예산 낭비를 비교해 배분 방식 결정",
            "각 방의 기본 분량을 먼저 확보하고, 남는 예산을 대화가 더 필요한 방에 재분배하는 정책 설계"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "동일 대화 샘플에서 JSON 대비 입력 토큰 약 60% 절감",
            "대화량이 적은 방의 근거도 확보하면서 남은 입력 예산을 재활용하는 배분 기준 수립",
            "업로드 한도와 모델 입력 한도를 구분한 메시지 수·길이 계산 정책 구체화"
          ]
        }
      ],
      "role": "실사용 데이터 분석·입력 포맷·서비스 범위·토큰 배분 정책 설계",
      "originals": [
        {
          "src": "assets/hierarchy-format-comparison.svg",
          "label": "같은 대화의 JSON·플랫텍스트 입력 비교",
          "caption": "메시지·화자·시간을 유지하면서 반복 필드 축소 · 절감률은 위키의 동일 샘플 측정값",
          "width": 1200,
          "height": 930,
          "wide": true
        },
        {
          "src": "assets/hierarchy-token-policy.svg",
          "label": "채팅방별 기본 분량과 남은 예산 재배분",
          "caption": "각 방의 근거를 먼저 확보하고 남은 입력 예산 재활용",
          "width": 1200,
          "height": 600,
          "wide": true
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "같은 대화를 가볍게 담고, 여러 방에 입력 예산 배분"
    },
    {
      "id": "case-7",
      "page": 7,
      "company": "kakao",
      "title": "채팅방 선택에서 질문 의도 기반 전체 대화 탐색으로 확장",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "사용자가 대화가 오간 방과 시점을 기억해 직접 고르던 방식을, 질문만으로 알맞은 근거 범위를 추천하는 경험으로 확장"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "사용자 질문의 목적과 근거가 남아 있는 대화 시점을 나눠 판단하는 조회 정책 설계",
            "“다음 주 일정”의 근거는 이전 대화에 있다는 점을 반영해, 질문 속 날짜와 실제 조회 기간 구분",
            "과거 시점형·최근 맥락형·특정 상대형에 따라 전체 방 조회와 직접 선택 분기",
            "실제 대화량으로 최근 7일의 입력 예산 수용 범위를 확인하고, 질문별 기대 기간과 실제 조회값을 비교 검증"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "최대 4개 방을 고르는 MVP에서 전체 채팅방 조회로 분석 대상 확대",
            "질문 의도에 맞는 채팅방·기간 추천과 [바로 확인하기]로 분석 시작 단계 단축"
          ]
        }
      ],
      "role": "조회 정책 · 프롬프트 · UX 기획 및 데이터 분석",
      "contribution": "100%",
      "team": "디자인 1명 · 서버 1명 · 모델 1명 · FE 1명",
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
          "src": "assets/sep23-scope_policy_table.png",
          "label": "질문 의도별 조회 정책",
          "caption": "질문 의도별 조회 정책",
          "wide": true,
          "width": 4196,
          "height": 676
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "협업 구성",
      "evidenceTitle": "질문 의도에 따라 채팅방 · 기간을 추천하는 흐름",
      "disclaimer": "실제 서비스 화면과 질문 의도별 조회 방식",
      "position": "AI Product Manager"
    },
    {
      "id": "case-6",
      "page": 6,
      "company": "kakao",
      "title": "대량 대화를 나눠 병렬 분석하고 하나의 응답으로 통합",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "전체 채팅방으로 넓어진 대화를 나눠 처리하면서, 순차 분석의 대기시간과 일부 구간만 보고 답하는 맥락 누락을 함께 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "대화를 여러 구간으로 나누고, 자원·비용을 고려한 최대 동시 처리량 관리 기준과 테스트 범위 정의",
            "완료 순서와 원래 대화 순서를 구분해 구간별 결과·성공·실패 상태를 수집하는 구조 설계",
            "유효한 근거 선별→중복 제거→시간 흐름·사건 연결→최종 응답의 통합 기준 수립",
            "상충하는 분석을 임의로 확정하지 않고, 근거 없는 사실을 추가하지 않는 응답 기준 정의",
            "정상 분석의 “근거 없음”과 실행 실패를 구분하고, 실패 구간만 재시도·최종 실패 시 부분 응답 차단"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "청킹 도입부터 병렬화·결과 통합·실패 처리까지 제품 정책과 입출력 흐름 구체화",
            "순차 처리의 누적 대기를 줄이고 여러 구간의 맥락을 함께 반영하는 처리 구조 설계",
            "분석 결과 통합 단계와 최종 사용자 응답 단계의 역할 분리"
          ]
        }
      ],
      "role": "청킹·병렬 처리·분석 결과 통합·실패 복구 정책 설계",
      "contribution": "100%",
      "team": "서버 2명 · 모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/hierarchy-chunk-flow.svg",
          "label": "청킹 병렬 분석·결과 통합·실패 복구 흐름",
          "caption": "동시 분석의 속도 개선과 분석 결과 통합의 맥락 복원을 구분해 설계",
          "width": 1200,
          "height": 1050,
          "wide": true
        }
      ],
      "galleryColumns": 1,
      "teamLabel": "협업 구성",
      "evidenceTitle": "대화 분할→병렬 분석→근거 통합→최종 응답",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager"
    },
    {
      "id": "case-8",
      "page": 8,
      "company": "kakao",
      "title": "동일 대화 21건·525회 실행으로 분석 모델과 프롬프트 비교",
      "image": "assets/evidence-hd-08.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "긴 대화에서 정보 누락 · 화자 혼동 오류 발생 모델을 바꾸면 나아지는지, 어떤 상황에서 틀리는지 같은 케이스로 반복 검증할 기준이 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "정정 · 주체 혼동 등 함정을 담은 평가 케이스 21건 설계",
            "케이스마다 헷갈리는 이유 · 기대 답변 · 필수 채점 포인트 정의",
            "5개 모델 · 프롬프트 조합을 같은 케이스로 각 5회 반복",
            "품질 · 오류율 · 응답 시간 · 유형별 정확도 8개 지표 비교",
            "실패 응답을 원문과 대조해 오류 유형 분류"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "틀린 답이 적은 V3(모델 B · CoT)를 기준안으로 선정",
            "중간에 바뀐 정보: 기존 모델 5회 모두 오답 → V3 5회 모두 정답",
            "정보 추출 · 흐름 요약 합격률 각 92%, 5개 안 중 최고"
          ]
        }
      ],
      "role": "평가 케이스 설계 · 모델 비교 실험 · 고도화 정책 기획",
      "contribution": "100%",
      "team": "모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-evaluation-original.png",
          "label": "평가 케이스 결과 분석안",
          "caption": "",
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
      "evidenceNote": "92%는 정답이 명확한 추출 · 요약 평가군 기준",
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
      "title": "기억 저장·수정의 실패 원인을 찾아 프롬프트 수정과 재검증 반복",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "자동기억·직접요청이 실제 대화에서 의도대로 저장·수정되는지 검증하고, 프롬프트를 고칠 때 다른 동작의 품질이 떨어지는지 함께 확인"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "자동기억·직접요청용 프롬프트와 도구 호출 흐름을 조정하고 버전별 변경점 관리",
            "자동저장·직접요청 시나리오의 기대 동작과 채점 기준 설계, 실대화 평가로 검증 범위 확장",
            "사용자 발화·기존 기억·변경 결과·도구 실행을 대조해 낮은 점수 사례 전수 분석",
            "실패 원인을 모델·프롬프트, 평가셋·채점 기준, 도구·실행 오류로 나눠 개선 우선순위 결정",
            "프롬프트를 수정한 뒤 동일 평가셋을 재실행해 개선·회귀를 비교하고 후속 보완"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "자동저장 222개 시나리오와 실대화 228개·1,502턴으로 저장·편집 동작 검증",
            "130회 이상 반복 평가를 통한 프롬프트 개선과 실패 유형별 후속 검증",
            "자동저장 시나리오 반복 평가에서 91.2~94.6% 점수 확인",
            "평가 케이스→오류 분석→프롬프트 수정→재평가로 이어지는 지속 개선 체계 운영"
          ]
        }
      ],
      "role": "평가 체계·채점 기준 설계, 모델·프롬프트 개선 및 우선순위 관리",
      "originals": [
        {
          "src": "assets/nov07-memory-eval-cases.png",
          "label": "메모리 직접요청 평가 케이스",
          "caption": "조회·수정·역할극·미확정 계획 등 경계 상황별 기대 동작 정의",
          "wide": true,
          "width": 2870,
          "height": 1166
        },
        {
          "src": "assets/nov07-evaluation-runs.png",
          "label": "동일 평가셋 반복 실행·비교 이력",
          "caption": "222개 시나리오의 버전별 평가 결과와 실행 비교",
          "wide": true,
          "width": 1994,
          "height": 1488
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "기억 동작별 평가 케이스와 버전별 실행 비교",
      "disclaimer": "내부 모델명·프롬프트·식별 정보 비식별화",
      "evidenceNote": "점수는 자동저장 시나리오 평가 실행 기준"
    },
    {
      "id": "case-9",
      "page": 9,
      "company": "kakao",
      "title": "자동기억·직접요청과 사용자 관리 경험 설계",
      "image": "assets/evidence-hd-09.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "매번 배경과 취향을 설명하지 않아도 나에게 맞는 답변·추천을 받을 수 있도록, 기억할 정보의 기준과 사용자가 통제할 수 있는 관리 경험 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "자동기억과 직접 저장·수정·삭제 요청을 구분하고, 오래 쓸 취향·생활 정보와 일회성 요청의 저장 기준 수립",
            "사용자가 밝힌 사실과 AI의 추천·추측을 구분해, 추천한 장소·상품을 사용자 취향으로 저장하지 않는 규칙 정의",
            "변경한 여행 날짜만 갱신하고 기존 예산·제약은 유지하는 부분 수정 정책 설계",
            "현재 기억 삭제·향후 저장 금지·다시 기억 요청과 메모리 ON/OFF 동작 구분",
            "민감정보 저장 차단 56건 분석과 판정 임계값 50%·90%·95% 비교, 95% 조정안 담당 팀 협의",
            "기억 후보와 확정된 정보를 구분하고, 새 대화에서 확인한 의미에 따라 갱신·정리하는 기준 설계"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "취향·계획·제약 등 기억 분류와 자동기억·직접요청의 저장·갱신·삭제 정책 구체화",
            "사용자 사실의 잘못된 저장과 삭제 후 재저장을 점검할 평가 기준 마련",
            "민감정보 오탐과 미탐 위험을 함께 검토한 임계값 조정안 도출",
            "설정·요약·삭제 화면과 기억 관리 동작을 포함한 MVP 배포 준비"
          ]
        }
      ],
      "role": "메모리 제품 정책·UX, 저장·편집 품질 및 에이전트 연계 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 서버 1명 · 모델 1명 · FE 1명",
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
          "label": "기억한 내용 요약",
          "caption": "기억한 내용 요약",
          "wide": false,
          "width": 508,
          "height": 954
        },
        {
          "src": "assets/final-ppt-9-mem_doc_blur.png",
          "label": "기억 처리 흐름",
          "caption": "",
          "wide": true,
          "width": 1666,
          "height": 1058
        }
      ],
      "galleryColumns": 3,
      "teamLabel": "협업 구성",
      "evidenceTitle": "메모리 안내·설정·요약 화면과 기억 처리 흐름",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager"
    },
    {
      "id": "case-memory-verticals",
      "company": "kakao",
      "title": "같은 기억을 여러 에이전트의 답변·추천에 연결",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "장소·쇼핑 등 서비스가 달라져도 사용자 취향과 진행 중인 계획을 이어서 활용하고, 현재 요청과 무관하거나 달라진 기억이 답변에 잘못 반영되지 않도록 기준 마련"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "사용자가 질문할 때 최신 기억을 전달하고, 각 에이전트가 현재 요청의 후보·조건·답변 방식을 바꾸는 정보만 선택하도록 연계 기준 설계",
            "장소는 동행자·음식 취향·이용 제약, 쇼핑은 스타일·구매 계획·사용 조건을 추천과 비교에 반영하는 가이드 작성",
            "선톡은 관심사·준비 중인 계획을 주제 선정에, 사주는 확인된 본인 정보와 현재 고민을 입력·상담 맥락에 활용하도록 정리",
            "현재 질문에서 바뀐 조건을 기억보다 우선하고, 추천한 상품·장소를 구매·방문 사실로 확정하지 않는 공통 기준 수립",
            "답변에 기억을 참고하는 흐름과 기억 자체를 조회·수정·삭제하는 흐름을 구분해 에이전트 연동 가이드 제공"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "하나의 공통 기억을 여러 버티컬에서 활용하는 전달 방식·활용 기준·연동 가이드 마련",
            "반복 입력을 줄이고 사용자 상황에 맞는 추천·비교로 연결할 개인화 기반 설계",
            "저장·편집 품질과 버티컬 답변·추천 효과를 구분해 후속 검증 범위 명확화"
          ]
        }
      ],
      "role": "공통 개인화 방향·버티컬별 기억 활용 기준·연동 가이드 설계",
      "originals": [
        {
          "src": "assets/hierarchy-memory-verticals.svg",
          "label": "공통 메모리와 버티컬별 활용 기준",
          "caption": "같은 기억을 공유하고, 현재 요청에 필요한 정보만 답변에 반영",
          "wide": true,
          "width": 1200,
          "height": 1060
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "공통 기억에서 여러 에이전트의 맞춤 답변으로"
    },
    {
      "id": "case-10",
      "page": 10,
      "company": "kakao",
      "title": "대화로 만든 공유형 콘텐츠 7종, 웹검색 · 장소 대비 클릭률 최대 3.2배",
      "image": "assets/evidence-hd-10.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "나와 친구의 대화 특징을 재미있게 보여주면 결과를 친구와 비교 · 공유하며 자연스럽게 확산될 수 있다고 판단"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "말투 나이 · AI 판결소 · 톡방 시상식 · TBTI 등 7종 구현",
            "콘텐츠별 시작 발화 · 응답 구성 · 결과 형식 설계",
            "점수 · 유형명 · 대화 근거로 공유하고 싶은 결과 설계",
            "관계 악화를 막는 완충 문장 · 대화 제안 설계"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "클릭률 8.1%: 웹검색 4.8%의 1.7배, 장소 2.5%의 3.2배",
            "공유율 11.98%: 웹검색 0.36%의 33배, 장소 0.08%의 150배",
            "성격 분석 클릭률 14.7%, 웹검색 최고 7.1%의 2배",
            "서버 · 모델 변경 없이 프롬프트만으로 콘텐츠 추가"
          ]
        }
      ],
      "role": "공유형 콘텐츠 기획 · 응답 설계",
      "contribution": "100%",
      "team": "모델 1명",
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
      "id": "case-home-suggest",
      "company": "kakao",
      "position": "AI Product Manager",
      "title": "첫 질문을 쉽게 시작하도록 바꾼 홈 추천 질문 탐색",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "가로 스크롤에 가려진 추천 질문을 한 화면에서 발견하고, 질문을 직접 떠올리지 않아도 다양한 AI 기능을 시작할 수 있는 홈 경험 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "가로형 추천 질문을 아이콘과 함께 보이는 세로 목록 5개로 개편",
            "서로 다른 기능 태그에서 질문을 구성하고, 새로고침 시 새로운 조합을 보여주는 정책 설계",
            "첫 진입·새 주제 전환·진행 중 대화 재진입에 따른 추천 질문 노출 기준 구분",
            "질문별 노출·클릭을 연결하고 태그·순서·추출 및 갱신 유형을 확인하는 로그 정의",
            "설정 복귀·키패드 전환에서 대화·목록·배너가 겹치는 문제의 재현 조건 정리와 수정 검증"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "세로형 추천 질문과 운영 기능 CBT 배포·동작 검증",
            "질문별 노출·클릭 및 주요 속성의 로그 적재 확인",
            "설정 복귀 시 이전 대화 위에 추천 질문이 겹치는 문제 수정·운영 반영"
          ]
        }
      ],
      "role": "홈 탐색 전략·UX·추천 질문 운영 정책·이벤트 로그 기획",
      "originals": [
        {
          "src": "assets/nov07-home-before.png",
          "label": "개선 전 가로형 추천 질문",
          "caption": "개선 전 · 가로로 넘겨 찾는 추천 질문",
          "wide": false,
          "width": 664,
          "height": 1370
        },
        {
          "src": "assets/nov07-home-after.png",
          "label": "개선 후 세로형 추천 질문",
          "caption": "개선 후 · 아이콘과 함께 한눈에 보는 5개 질문",
          "wide": false,
          "width": 393,
          "height": 853
        }
      ],
      "galleryColumns": 2,
      "evidenceTitle": "가로형 질문 칩에서 세로형 추천 목록으로 개편",
      "disclaimer": "기획 시안 · 서비스 적용 단계별 검증 진행"
    },
    {
      "id": "case-intent-analytics",
      "company": "kakao",
      "position": "AI Product Manager",
      "title": "실제 질문 4만 건으로 설계한 대화연동 이용 목적 분류",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "대화연동 기능에 들어오는 서로 다른 질문의 목적과 응답 반응을 파악하기 위해, 원질문을 운영 로그에 남기지 않는 분석 기준 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "한 달간 실제 질문 40,216건을 바탕으로 이용 목적 분류안과 유형별 건수·비중 분석",
            "질문 목적과 기간·대상·말투 같은 조건을 나눠 분류 코드 설계",
            "새 요청과 후속 질문을 구분하고, 후속 질문도 현재 목적을 독립적으로 판단하는 기준 수립",
            "한 질문의 복수 목적·판단 불가·서비스 범위 밖 요청을 구분해 분류 기준 보완",
            "원질문 대신 분류 결과를 기록하고 응답·클릭·공유·후속 질문·재시도와 연결하는 로그안 설계"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "실제 질문 기반 이용 목적 분류안과 유형별 집계·검토 자료 정리",
            "분류 상태와 이용 목적을 분리해 판단 불가·범위 밖 요청의 오분류 기준 보완",
            "원질문을 저장하지 않는 최소 로그 구조와 데이터팀 검토안 구체화"
          ]
        }
      ],
      "role": "실사용 데이터 분석·질문 목적 분류·측정 정책 설계",
      "originals": [
        {
          "src": "assets/nov07-intent-flow.svg",
          "label": "질문 목적 분류와 최소 로그 설계",
          "caption": "목적·조건·분류 상태를 나눠 요청과 응답 반응을 연결하는 설계",
          "width": 1200,
          "height": 1050,
          "wide": true
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "실제 질문 분석에서 이용 목적·측정 정책으로 연결"
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
            "대출 가능 금액과 담보 비율을 확인하기 어렵고, 일괄 노출된 메뉴만으로 필요한 행동을 찾기 어려움 상태를 쉽게 이해하고 다음 행동으로 연결하도록 개선"
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
            "보험 상담 수요가 실제 신청으로 이어지도록 유입 채널과 신청 경로를 개선하고, 상담 리드 확대를 매출 성장으로 연결"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "상담 신청 경로와 전환 데이터를 분석해 개선안 도출",
            "신규 유입 확대를 위한 채널 · 소재별 성과 분석",
            "주요 지표 모니터링과 성과 리포팅",
            "가설을 세우고 실험해 효과적인 신청 경로 검증"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "상담 신청 경로 개선 전 대비 매출 121% 증가",
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
            "광고 중심의 보험 홈과 달리 사용자는 보유 보험 확인과 분석을 원해 광고 영역의 클릭률이 낮았음 보험 관리 경험을 상담 · 상품 이용으로 연결"
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
            "진입부터 최종 실행까지의 전환을 높이기 위해 사용자가 멈추는 지점과 이유를 파악하고, 제품 개선 과제를 지속적으로 발굴"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "단계별 퍼널과 신청 · 실행 결과 데이터를 분석",
            "정기 사용자 인터뷰로 불편과 미충족 수요 발굴",
            "가설을 검증할 실험 과제와 사용자 요구사항 정의",
            "사용자 흐름을 설계하고 결과에 따라 개선 반복"
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
      "role": "제품 총괄 및 실험 · 서비스 기획",
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
      "title": "금융사 22곳 연동으로 대출 실행률 6배 개선",
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
      "id": "case-17",
      "page": 17,
      "company": "toss",
      "title": "온라인 대환대출 인프라 연계 주택담보대출 갈아타기 출시",
      "image": "assets/evidence-hd-17.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "온라인 대환대출 인프라에 맞춰 사용자가 기존 대출을 비교하고 갈아탈 수 있는 주택담보대출 서비스 기획"
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
            "시장 지표와 대출 상담 · 모집 구조 분석",
            "재위탁 규제 쟁점을 검토하고 규제특례 신청 추진",
            "서비스 모델과 소비자 편익을 신청서로 구체화",
            "법무 · 대관 · 금융소비자보호 담당자와 심사 대응"
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
      "role": "제품 총괄 및 서비스 모델 · 신청서 작성",
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
            "주택 검색 단계에서 사용자 28%가 이탈 이탈 사용자 중 72%가 KB시세가 없는 신축 아파트를 검색한 사실을 확인"
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
      "title": "후순위 대출 제휴로 전체 매출의 최대 28% 창출",
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
            "추가 자금 수요에 대응할 후순위 대출사 발굴",
            "제휴 상품을 서비스에 연동하고 성과 확인"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "후순위 대출 취급 금융사 3개 연동",
            "전체 매출에서 후순위 제휴사 비중 최대 28%"
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
            "제휴 상품의 금리가 낮아졌지만 사용자가 경쟁력을 체감하지 못해 전환이 기대에 못 미침 시장 금리와 비교하면 선택을 도울 수 있다고 판단"
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
            "국내외 SSP · DSP에 제휴 제안 및 계약 협의",
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
      "team": "단독 (국내외 파트너사 직접 커뮤니케이션)",
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
            "eCPM 기준값을 10~30%씩 조정하며 매출 최대 지점 탐색",
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
      "team": "단독 (매체 이슈 · 수익 지표 직접 관리)",
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
      "title": "광고 성과 모니터링을 위한 운영 어드민 구축",
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
      "role": "어드민 기획·지표·데이터 정의",
      "contribution": "100%",
      "team": "서버 2명 · 프론트 1명 · 디자인 1명",
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
            "자사 DMP의 네이버 · 카카오 검색 키워드를 이베이 광고에 활용할 수 있는 데이터 상품으로 연결",
            "이베이의 인기 · 급상승 · 시즌 키워드와 매칭해 구매 관심사에 맞는 광고 집행 지원"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "웹 트래픽 5억 중 약 5%(2,500만)의 키워드 매칭 가능성 확인으로 사업성 검토",
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
            "외부 SSP 트래픽이 내부 DSP에만 연결돼, 늘어난 외부 DSP 수요를 매출로 연결하기 어려운 거래 구조 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "내부 DSP 대표를 선정한 뒤 외부 DSP와 경쟁하는 2차 입찰 구조 기획",
            "입찰 로그로 구조 변경에 따른 매출 시뮬레이션",
            "입찰가 비율 9개 케이스를 테스트해 손실 없는 수익 구간 설정",
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
      "team": "서버 · DE 2명 · FE 1명 · 디자인 1명",
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
            "클릭·유입 사용자의 행동과 광고 반응 분석 수요",
            "보유 데이터의 광고 운영 활용 필요",
            "광고주별 가설 검증과 맞춤 분석 지원"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "사용자 행동에 대한 가설과 분석 지표 정의",
            "필요한 행동 데이터를 추출·가공",
            "가설을 검증하고 광고 운영 인사이트 도출",
            "광고주별 분석 리포트 작성 및 제공"
          ]
        },
        {
          "title": "결과",
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
            "광고주가 인플루언서에게 가격을 개별 문의하고 선입금해야 하는 불편을 확인 거래와 성과 확인을 지원하는 광고 오픈마켓 기획"
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
      "id": "case-5",
      "title": "카카오톡 대화를 찾아 답하는 대화연동 에이전트 0→1 구축·고도화",
      "intro": "카카오톡 속 일정·기억·관계를 질문으로 찾는 서버 기반 대화 분석 제품의 0→1 기획·출시와 고도화 주도",
      "role": "AI Product Manager · 제품 방향·범위·우선순위 결정, UX·모델·서버를 잇는 실행 정책 및 검증 주도",
      "outcomes": [
        {
          "value": "MVP 출시",
          "label": "대화 선택·업로드·서버 분석을 원래 질문의 답변까지 연결"
        },
        {
          "value": "이용 범위 확장",
          "label": "채팅방 선택형 MVP에서 전체 대화 탐색·대량 분석으로 고도화"
        },
        {
          "value": "활용 경험 확장",
          "label": "일정·기억·관계 분석부터 대화 기반 공유형 콘텐츠까지"
        }
      ],
      "detailIds": [
        "case-5",
        "case-token-budget",
        "case-7",
        "case-6",
        "case-8",
        "case-10",
        "case-intent-analytics"
      ],
      "labels": [
        "제품 실행·대화 맥락",
        "입력 형식·토큰 배분",
        "조회 범위 확장",
        "청킹·병렬 처리·결과 통합",
        "모델·프롬프트 검증",
        "활용·공유 확장",
        "사용 데이터·측정 정책"
      ],
      "challenge": "웹 검색으로 답할 수 없는 개인 대화 질문을 처리하기 위해, 대화 선택·서버 분석·응답 연결과 대량 대화 처리 방식을 처음부터 정의할 필요",
      "approach": "초기 실행 흐름을 만든 뒤 실제 대화량에 따라 입력 형식·배분·조회 범위를 조정하고, 청킹·병렬 분석·결과 통합과 모델 평가로 확장",
      "contribution": "100%",
      "team": "디자인 1명 · 클라 2명 · 서버 2명 · 모델 1명 · FE 1명"
    },
    {
      "id": "case-9",
      "title": "여러 에이전트의 맞춤 답변을 잇는 개인화 메모리 설계·고도화",
      "intro": "대화에서 확인한 취향·생활 배경·계획을 공통 기억으로 관리하고, 장소·쇼핑·선톡·사주의 답변과 추천에 연결하는 개인화 기반 설계",
      "role": "AI Product Manager · 공통 메모리 전략·정책·UX, 버티컬 활용 기준과 평가·프롬프트 개선 주도",
      "outcomes": [
        {
          "value": "공통 개인화 기반",
          "label": "같은 사용자 맥락을 여러 에이전트의 답변·추천에 연결"
        },
        {
          "value": "사용자 통제",
          "label": "기억 조회·부분 수정·삭제·저장 금지를 포함한 관리 경험 설계"
        },
        {
          "value": "MVP 배포 준비",
          "label": "기억 저장·편집 정책과 버티컬 활용·품질 검증 기준 정리"
        }
      ],
      "detailIds": [
        "case-9",
        "case-memory-verticals",
        "case-agent-quality"
      ],
      "labels": [
        "기억 정책·관리 UX·안전한 저장",
        "공통 기억·버티컬 연계",
        "평가셋·프롬프트·배포 준비"
      ],
      "challenge": "에이전트가 바뀔 때마다 배경을 다시 설명하는 경험을 줄이고, 같은 사용자 맥락을 여러 서비스에서 활용할 기준 필요. AI의 추측·일회성 요청이 잘못된 기억으로 남는 문제도 함께 관리",
      "approach": "자동기억·직접요청과 사용자 통제 정책을 정하고, 최신 기억에서 현재 요청에 필요한 내용만 활용하도록 버티컬별 가이드 수립. 시나리오·실대화 평가에서 찾은 오류는 프롬프트 수정과 재검증으로 연결",
      "contribution": "100%",
      "team": "디자인 1명 · 서버 1명 · 모델 1명 · FE 1명"
    }
  ]
};

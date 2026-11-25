const PORTFOLIO = {
  "companies": [
    {
      "key": "kakao",
      "name": "카카오",
      "role": "AI Product Manager",
      "period": "2025.12.01 ~ 현재",
      "duration": "약 11개월",
      "start": 9,
      "end": 10,
      "intro": "개인화 메모리와 대화분석 에이전트 출시, 긴 대화 처리와 답변 품질 개선",
      "entryId": "case-9"
    },
    {
      "key": "samsung",
      "name": "삼성증권",
      "role": "모니모 서비스 기획·운영",
      "period": "2025.02.01 ~ 2025.11.14",
      "duration": "9개월 14일",
      "start": 11,
      "end": 11,
      "intro": "대출 가능 금액·담보 상태 확인과 연장·상환 이용 흐름 개선",
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
      "intro": "대출 · 보험 제품 전략 · 우선순위 · 성과 관리, 퍼널 개선 · 금융사 연동 · 규제특례 추진",
      "entryId": "toss-loans"
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
      "title": "대화분석 에이전트 기획·출시",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "어느 채팅방에서 나눈 얘기인지 모르면 예전 약속이나 기록을 찾기 어려움",
            "카카오톡 대화에서 필요한 기록을 찾아 질문에 답하는 에이전트 출시"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "채팅방과 기간 선택부터 대화 사용 동의, 분석과 답변까지 사용자 화면과 서버 처리 흐름 설계",
            "처음에는 사용자가 최대 4개 채팅방을 고르는 방식으로 출시",
            "특정 상대가 없는 질문은 추천 기간의 분석 가능한 전체 채팅방을, 특정인을 묻는 질문은 사용자가 고른 방을 조회하도록 설계",
            "같은 대화의 입력 형식을 비교해 플랫 텍스트로 전환하고, 한도를 넘는 대화는 최대 3구간씩 병렬로 분석해 결과를 하나의 답변으로 통합",
            "분석 후 원문 삭제, 범위 변경, 이탈 후 복귀와 실패 시 재시도 정책 수립"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "채팅방을 일일이 고르지 않아도 질문에 맞는 대화를 찾아 답변하고 추가 질문까지 연결",
            "같은 대화의 예상 입력 토큰 약 60% 절감",
            "채팅방 한 곳에서 하루 메시지 약 210개를 가정해, 약 380일 분량을 나눠 분석하도록 설계",
            "사실 확인 종합 점수 86% → 96% (질문 8개의 답변을 카카오톡 원문과 기대 답변에 대조해 채점한 평균)"
          ]
        }
      ],
      "role": "서비스 출시 기획·이용 흐름·대화 사용 및 조회·복구 정책 설계",
      "contribution": "100%",
      "team": "디자인 1명 · 클라이언트 개발 2명 · 서버 개발 2명 · AI 모델 1명 · 프런트엔드 개발 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/sep23-scope_screen_a.png",
          "label": "추천 조회 범위 안내",
          "caption": "질문 대상에 따라 전체 채팅방 조회 또는 특정 채팅방 선택 안내",
          "wide": false,
          "width": 681,
          "height": 1190
        },
        {
          "src": "assets/scope-response-corrected.png",
          "label": "대화에 근거한 응답",
          "caption": "카카오톡 대화에서 확인한 내용을 근거로 답변",
          "wide": false,
          "width": 388,
          "height": 696
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "협업 구성",
      "evidenceTitle": "질문에 맞춘 조회 기간과 답변",
      "evidenceLink": {
        "href": "#case-6",
        "label": "JSON·플랫 텍스트 비교와 병렬 분석 도식 보기"
      },
      "disclaimer": "실제 서비스 화면과 질문 의도별 조회 방식",
      "position": "AI Product Manager",
      "additionalEvidence": {
        "title": "초기 대화 선택 화면",
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
        "disclaimer": "피그마 · 정책서의 초기 시안"
      },
      "anchorAliases": [
        "case-7"
      ],
      "supportingDetails": {
        "title": "초기 제공 범위",
        "rows": [
          {
            "label": "지원 요청",
            "text": "일반적인 대화 질문을 기본으로, 말투·성향 분석 등 공유를 유도하는 요청까지 초기 제공 범위에 포함"
          },
          {
            "label": "초기 범위",
            "text": "조회 기간별 대화량과 모델의 입력 한도를 비교해 최대 4개 채팅방·기본 2주로 설정"
          }
        ]
      }
    },
    {
      "id": "case-6",
      "page": 6,
      "company": "kakao",
      "title": "긴 대화의 입력 효율 개선과 분할 분석 체계 설계",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "기존 모델은 입출력을 합쳐 약 26만 토큰까지 처리해 긴 대화를 한 번에 읽기 어려움",
            "같은 모델에서 더 많은 대화를 읽고 한 답변으로 통합하도록 처리 방식 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "같은 대화의 JSON과 플랫 텍스트를 비교해 예상 토큰을 확인하고, 반복 표기가 적은 형식 적용",
            "채팅방별 입력량을 배분하고 남는 용량은 대화가 많은 방에 배분",
            "긴 대화를 입력 한도에 맞춰 나눠 최대 3구간씩 병렬 분석하고, 대기 중인 구간은 이어서 실행",
            "구간별 근거를 시간순으로 모아 하나의 답변으로 통합하고, 일정 변경·정정은 해당 대화의 최종 결정 반영"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "같은 대화의 예상 입력량이 약 17,000토큰에서 6,900토큰으로 감소",
            "채팅방 한 곳에서 하루 메시지 약 210개를 가정해, 약 380일 분량을 나눠 분석하도록 설계"
          ]
        }
      ],
      "role": "대화 입력·배분 정책과 분할·병렬 분석·결과 통합 정책 설계",
      "contribution": "100%",
      "team": "서버 개발 2명 · AI 모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/hierarchy-format-comparison.svg?v=20261124-token-comparison",
          "label": "같은 대화의 JSON·플랫 텍스트 입력 비교",
          "width": 1200,
          "height": 408,
          "wide": true
        },
        {
          "src": "assets/hierarchy-chunk-flow.svg?v=20261124-agent-design",
          "label": "긴 대화를 최대 3개 구간씩 병렬로 분석한 뒤 답변으로 통합하는 흐름",
          "wide": true,
          "width": 1200,
          "height": 278
        }
      ],
      "galleryColumns": 1,
      "teamLabel": "협업 구성 · 분할 처리",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager",
      "anchorAliases": [
        "case-token-budget"
      ],
      "evidenceNote": "메시지 업로드 상한 8만 개를 하루 약 210개로 환산하면 약 380일 분량. 플랫 텍스트로 약 9개 구간에 나눠 최대 3개씩 동시 분석. 화면에서 선택하는 조회 기간은 별도 정책"
    },
    {
      "id": "case-8",
      "page": 8,
      "company": "kakao",
      "title": "모델·프롬프트 개선, 사실 확인 종합 점수 86% → 96%",
      "image": "assets/evidence-hd-08.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "약속이 바뀌면 이전 내용을 답하거나, 말을 전한 사람을 행동한 사람으로 오인",
            "대화 원문을 기준으로 모델과 프롬프트를 비교해 답변 정확도 개선"
          ]
        },
        {
          "title": "프롬프트 설계와 평가",
          "items": [
            "프롬프트에 대화 원문을 확인하고, 말한 사람과 실제 행동한 사람을 구분한 뒤, 최종 변경 내용을 반영하도록 판단 순서를 명시",
            "‘내일’은 그 말을 보낸 날짜에 붙여 해석하고, 같은 일정의 변경·취소가 있으면 마지막으로 확정된 내용을 답에 반영",
            "질문 21개의 기대 답변과 채점 기준을 만들고 모델·프롬프트·추론 설정 5개 조합을 질문별 5회씩, 총 525회 비교",
            "원문 대조로 날짜·화자·변경값 오류를 분류하고, 점수·통과율·응답 시간 등 8개 지표로 개선 조합 선정"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "선정 모델·프롬프트에서 사실 확인 종합 점수 86% → 96%",
            "정답 범위가 명확한 일부 추출·요약 질문의 통과율 각각 92%로 5개 조합 중 최고",
            "품질 우선 조합(평균 17.20초)과 유사 품질의 빠른 조합(평균 4.98초)을 비교해, 빠른 조합을 후속 개선 기준으로 선정",
            "답변 내용 오류와 생성 실패를 구분해 후속 개선 과제 도출"
          ]
        }
      ],
      "role": "평가셋·채점 기준 설계, 모델·프롬프트 비교 분석과 개선안 선정",
      "contribution": "100%",
      "team": "AI 모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-evaluation-original.png",
          "label": "평가 케이스 결과 분석안",
          "caption": "원본 평가표 · 질문별 점수는 0~1점, 본문에는 평균을 정수 백분율로 표시",
          "wide": true,
          "width": 2200,
          "height": 1866
        },
        {
          "src": "assets/nov07-agent-builder.png",
          "label": "대화분석 에이전트 모델·프롬프트 구성",
          "caption": "질문에 따라 필요한 도구와 답변 단계를 연결한 에이전트 구성 화면 · 모델명 익명화",
          "wide": true,
          "width": 2227,
          "height": 1147
        }
      ],
      "galleryColumns": 1,
      "teamLabel": "협업 구성",
      "evidenceTitle": "같은 질문으로 비교한 모델·프롬프트 평가 결과",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager",
      "evaluationGuide": {
        "title": "사실 확인 점수는 이렇게 계산",
        "rows": [
          {
            "label": "평가 질문",
            "text": "사실 확인 질문 8개를 모델·프롬프트 조합마다 5회씩 실행"
          },
          {
            "label": "채점 기준",
            "text": "카카오톡 원문과 미리 정한 기대 답변을 기준으로 날짜·장소·실제 행동한 사람과 마지막 변경 내용이 맞는지 확인"
          },
          {
            "label": "점수 계산",
            "text": "질문별 답변에 0~1점을 매긴 뒤 평균 · 본문 점수는 백분율로 환산해 소수점 이하 버림"
          },
          {
            "label": "통과율",
            "text": "75% 이상 통과 · 답변이 나오지 않은 경우는 미통과로 집계"
          }
        ]
      }
    },
    {
      "id": "case-agent-quality",
      "company": "kakao",
      "position": "AI Product Manager",
      "title": "메모리 저장·수정·삭제 동작 검증과 품질 개선",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "사용자가 확인한 조건이 빠지거나 LLM 응답이 사용자 정보로 저장되는 사례 확인",
            "다음 답변에 쓸 기억을 정확히 남기고 요청한 범위에서 수정·삭제하도록 개선"
          ]
        },
        {
          "title": "주요 업무",
          "paragraphs": [
            "취향과 계획을 다음 답변에 활용하고, 저장한 내용을 사용자가 확인·수정·삭제할 수 있도록 설계해 출시",
            "시나리오 평가에서 새 조건이 빠지거나 LLM 응답이 사용자 정보로 저장되는 사례 확인",
            "감점 사례를 유형별로 묶고 비중과 영향을 비교해 고칠 순서를 정한 뒤, 한 유형씩 프롬프트 수정",
            "사용자 원문, 기존 기록에서 보존할 내용, 실제 도구 호출의 대상과 내용을 저장 전에 서로 대조하도록 프롬프트 수정",
            "케이스마다 도구가 실제로 한 일과 변경 전후 기록을 대조. 한 유형을 고칠 때마다 전체를 다시 평가해 이전에 맞던 사례도 확인"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "저장·수정 검증을 반복해 최고 평균 94.6% 확인",
            "식당 추천 사례에서 해물찜만 탐색 조건으로 추가하고 기존 목적과 지역이 보존됐는지 확인",
            "민감정보 차단 사례의 원문과 판정 점수를 비교해 차단 기준 조정안 제안"
          ]
        }
      ],
      "role": "오류 유형과 빈도 분석, 프롬프트 수정 우선순위 결정, 수정 후 전체 재평가",
      "team": "AI 모델 1명",
      "originals": [
        {
          "src": "assets/nov07-memory-eval-cases.png",
          "label": "사용자의 메모리 저장·수정 요청 평가 케이스",
          "caption": "저장·수정 요청, 역할극·미확정 계획 등 상황별 기대 결과 정의",
          "wide": true,
          "width": 2870,
          "height": 1166
        },
        {
          "src": "assets/nov07-evaluation-runs.png",
          "label": "동일 평가셋 반복 실행·비교 이력",
          "caption": "같은 시나리오로 비교한 버전별 실행 기록 · 가장 아래 행에 최고 평균 94.6% 표시",
          "wide": true,
          "width": 1994,
          "height": 1488
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "메모리 시나리오 평가에서 발견한 문제",
      "disclaimer": "내부 모델명·프롬프트·식별 정보 비식별화",
      "supportingDetails": {
        "title": "저장·수정·삭제 평가의 채점과 추가 검증",
        "rows": [
          {
            "label": "평가 범위",
            "text": "취향·계획을 다음 답변에 활용할 수 있도록 필요한 정보가 정확히 기록되는지 확인"
          },
          {
            "label": "수정·삭제 검증",
            "text": "여행 날짜만 바꾸면 기존 예산이 남는지, 회사 이름만 지우면 기존 위치가 남는지 확인"
          },
          {
            "label": "채점",
            "text": "기대 결과 충족 1점 · 일부 충족 0.5점 · 잘못 처리 0점"
          },
          {
            "label": "94.6%",
            "text": "저장·수정 시나리오를 반복 평가한 최고 평균 점수"
          },
          {
            "label": "추가 동작 검증",
            "text": "별도 시나리오 평가에서 변경 전후의 저장과 갱신 결과를 비교"
          },
          {
            "label": "차단 검토",
            "text": "저장이 차단된 원문과 민감정보 판정 점수를 대조해 불필요한 차단과 누락 위험을 함께 검토"
          }
        ]
      },
      "planningEvidence": {
        "distributionTitle": "메모리 시나리오 평가에서 발견한 문제",
        "distributionNote": "두 시나리오 평가의 감점 사례를 합산한 비율 · 주요 유형만 표시",
        "distributionHeaders": [
          "오류 유형",
          "감점 사례 중 비중"
        ],
        "distribution": [
          [
            "확인된 새 조건·상태 누락",
            "17.8%"
          ],
          [
            "민감정보 저장",
            "13.3%"
          ],
          [
            "LLM 응답을 사용자 정보로 저장",
            "11.1%"
          ],
          [
            "잘못된 삭제·갱신",
            "2.2%"
          ]
        ],
        "caseTitle": "호출에 담을 내용",
        "caseHeaders": [
          "항목",
          "호출 전 확인 내용"
        ],
        "caseRows": [
          [
            "갱신 문장",
            "“할머니와 갈 대구 남구 식당을 찾으며 해물찜 식당도 살펴보는 중”"
          ],
          [
            "제외 조건",
            "LLM이 제안한 룸·주차·맵기는 사용자 근거를 확인할 수 없어 제외"
          ]
        ],
        "caseNote": "실제 평가에서 계획과 저장된 내용을 비교하고, 한 유형을 고칠 때마다 전체를 다시 평가",
        "reviewHeaders": [
          "오류 유형",
          "프롬프트에 넣은 지시",
          "평가에서 확인할 결과"
        ],
        "review": [
          [
            "새 조건·상태 누락",
            "사용자 원문에서 새로 밝힌 조건과 적용 범위를 확인",
            "빠졌던 조건과 적용 범위가 기록됐는지 확인"
          ],
          [
            "민감정보 저장",
            "쓸 수 있는 과제 조건과 저장에서 제외할 정보를 확인",
            "민감한 상세 정보 제외, 유효한 조건 보존"
          ],
          [
            "LLM 응답을 사용자 정보로 저장",
            "사용자가 직접 말하거나 확인한 구절을 확인",
            "LLM 응답의 해석·추천과 사용자 조건을 구분해 기록"
          ],
          [
            "잘못된 삭제·갱신",
            "철회한 내용과 조회한 기존 기록을 대조",
            "철회 대상이 기록에 없으면 수정·삭제 생략"
          ]
        ],
        "promptTitle": "저장 직전, 근거와 호출 내용 대조",
        "promptNote": "식당 추천 평가 사례를 바탕으로 재구성",
        "promptHeaders": [
          "확인 단계",
          "저장 전에 확인한 내용"
        ],
        "promptRows": [
          [
            "1. 사용자 근거",
            "- “해물찜 맛있게 하는집 있니”\n- 이번 식당 탐색에 해물찜 메뉴 조건 추가"
          ],
          [
            "2. 기존 보존",
            "- 할머니와 갈 식당을 찾는 목적 유지\n- 대구 남구 지역도 기존 기록에서 확인"
          ],
          [
            "3. 호출 대조",
            "- update_memory로 기존 식당 탐색 기록 갱신\n- 호출할 대상과 내용이 계획대로인지 확인"
          ]
        ],
        "caseBasis": "기존 식당 탐색 기록의 갱신 문장을 호출 전 대조"
      }
    },
    {
      "id": "case-9",
      "page": 9,
      "company": "kakao",
      "title": "개인화 메모리의 저장 정책과 사용자 관리 기능 설계",
      "image": "assets/evidence-hd-09.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "새 대화에서 전에 알려준 취향과 계획이 반영되지 않으면 상황에 맞는 추천이 어려움",
            "다음 답변에 쓸 정보를 골라 기억하고 사용자가 직접 확인·관리할 수 있도록 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "자동기억 / 대화에서 다음 답변에 쓰일 취향과 조건, 진행 중인 계획을 선별해 저장",
            "직접요청 / ‘기억해줘’, ‘바꿔줘’, ‘지워줘’ 같은 요청을 처리하고 저장된 정보는 화면에서 확인·관리",
            "음식 취향은 이후 추천에도, 여행 기간은 해당 여행의 일정에 반영하도록 정보의 주체·조건·상태를 함께 기록",
            "현재 발화에서 새로 확인한 정보에 근거해 자동기억 범위를 정하고, 최근 대화는 생략된 대상과 정보의 주체를 파악하는 데 활용",
            "여러 대화에서 탐색이 이어지지만 목적이 정해지지 않은 정보는 메모리 후보(Memory Signal)로 분리",
            "민감·개인정보 사전 확인, 현재 정보 삭제, 재저장 금지(Suppression), 기능 중지 동작 정의",
            "직접 수정·삭제 요청은 기존 기록에서 대상을 확인하고 지정한 정보만 바꾸도록 설계"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "개인화 메모리 출시, 정보 선별·저장부터 사용자 확인·수정·삭제와 재저장 금지까지 연결"
          ]
        }
      ],
      "role": "메모리 처리 정책·사용자 관리 기능·화면 설계",
      "contribution": "100%",
      "team": "디자인 1명 · 서버 개발 2명 · AI 모델 1명 · 프런트엔드 개발 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/memory-capture-example.svg?v=20261124-evidence",
          "label": "취향과 여행 조건을 구분해 기억하고 다음 추천에 반영하는 예시",
          "wide": true,
          "width": 1200,
          "height": 345
        },
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
          "src": "assets/memory-planning-flow.svg?v=20261107-readable-originals",
          "label": "개인화 메모리의 저장·관리 흐름",
          "caption": "새 정보 선별부터 사용자 요청에 따른 수정·삭제까지의 처리 기준",
          "width": 1200,
          "height": 1160,
          "wide": true
        }
      ],
      "galleryColumns": 3,
      "teamLabel": "협업 구성",
      "evidenceTitle": "기억이 만들어져 추천에 반영되는 예시와 관리 화면",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager",
      "supportingDetails": {
        "title": "기억한 정보의 답변 활용 예시",
        "rows": [
          {
            "label": "여행 코스 추천",
            "text": "동네 산책과 현지 맛집을 선호한다는 기억을 바탕으로, 다음 여행 질문에서 산책하기 좋은 동네와 식당을 중심으로 일정 추천"
          },
          {
            "label": "장소 추천",
            "text": "이전에 알려준 음식 취향과 동행 조건을 참고해 상황에 맞는 식당 추천"
          },
          {
            "label": "쇼핑",
            "text": "앞서 살펴본 선물 후보와 가격대를 바탕으로 다음 대화에서 비교 이어가기"
          }
        ]
      }
    },
    {
      "id": "case-memory-verticals",
      "company": "kakao",
      "title": "여러 AI 서비스가 공유하는 메모리 연동·활용 체계 설계",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "장소 추천에서 확인한 취향이나 쇼핑에서 비교한 조건을 다른 에이전트에서도 이어 쓰기 어려움",
            "요청 시점의 최신 기억을 여러 에이전트에 전달하는 방식 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "각 에이전트가 요청 시점의 최신 사용자 정보를 받을 수 있도록 공통 메모리 전달 방식 정의",
            "장소 추천에 음식 취향과 동행 조건을 참고하고, 쇼핑에서 이전에 살펴본 후보와 가격대를 이어서 비교하는 활용 예시 정리",
            "메모리를 답변에 참고하는 동작과 저장 정보를 수정·삭제하는 동작을 구분해 연동 가이드에 명시",
            "서비스 담당자가 같은 기준으로 연동할 수 있도록 서비스별 적용 범위와 예시 정리"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "여러 AI 서비스에 적용할 메모리 전달 방식과 서비스별 활용 예시를 연동 가이드로 정리"
          ]
        }
      ],
      "role": "공통 메모리 전달 방식과 서비스별 활용 예시·연동 가이드 설계",
      "team": "기획 1명",
      "originals": [
        {
          "src": "assets/hierarchy-memory-verticals.svg?v=20261118-verified-copy",
          "label": "공통 메모리와 서비스별 활용 예시",
          "caption": "장소·쇼핑·선톡·사주에서 메모리를 활용할 수 있는 정보와 답변 예시",
          "wide": true,
          "width": 1200,
          "height": 1060
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "공통 메모리 전달 방식과 서비스별 활용 예시",
      "contribution": "100%"
    },
    {
      "id": "case-10",
      "page": 10,
      "company": "kakao",
      "title": "대화 기반 공유 콘텐츠 7종 구현, 최고 공유율 25.52%",
      "image": "assets/evidence-hd-10.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "기존 대화분석은 기록이나 정보를 확인하는 기능이 중심이라 공유할 콘텐츠가 제한적",
            "채팅방에 공유할 콘텐츠를 만들어 새로운 이용 동기와 자발적 공유 수요 검증"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "톡 나이·TBTI·톡방 시상식 등 7종의 추천 문구와 콘텐츠별 프롬프트 작성",
            "톡방 시상식은 채팅에서 멤버마다 두드러지는 행동을 찾아 상 이름·수상자·대화 근거를 함께 제시하는 형식으로 설계",
            "TBTI는 유형과 근거를 함께 보여주는 MBTI 패러디로 구성하고 관계를 단정하거나 갈등을 유발하는 해석은 제한",
            "서버·모델 변경 없이 프롬프트로 구현하고, 추천 문구 클릭률과 응답 대비 공유율 비교"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "채팅방 멤버에게 가상의 상을 주는 ‘톡방 시상식’의 응답 대비 공유율이 25.52%로 대화분석 콘텐츠 7종 중 최고",
            "쇼핑·장소·웹검색 등 다른 에이전트 평균 공유율 3.4% 대비 약 7.5배 수준",
            "콘텐츠 추천 문구 클릭률 8.1% · 성향 분석 14.7% 확인"
          ]
        }
      ],
      "role": "공유형 콘텐츠 기획·프롬프트 작성·응답 형식 구현·이용 지표 분석",
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
      "position": "AI Product Manager",
      "evidenceNote": "공유율: 응답 수 대비 공유 수 · 비교 기준: 쇼핑·장소·웹검색 등 다른 에이전트 평균 공유율 3.4% · 클릭률: 추천 문구 노출 수 대비 클릭 수"
    },
    {
      "id": "case-11",
      "page": 11,
      "company": "samsung",
      "title": "대출 현황 확인부터 연장·상환까지 이용 흐름 개선",
      "image": "assets/evidence-hd-11.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "메뉴 중심 화면에서 대출 가능 금액과 담보 부족 여부를 찾기 어려움",
            "한 화면에서 대출 상태를 확인하고 연장·상환으로 바로 이동할 수 있도록 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "9개 메뉴를 나열하던 화면을 대출 상태와 주요 업무 중심으로 재구성",
            "대출 가능 금액·담보 비율을 한 화면에서 파악하도록 정보 배치와 시각화 설계",
            "만기 임박·담보 부족 등 사용자 상태에 따라 필요한 기능을 먼저 보여주는 메뉴 노출 기준 정의",
            "상황별 안내에서 대출 연장·상환 기능으로 이동할 수 있도록 화면 흐름 연결"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "9개 메뉴 나열에서 대출 상태 요약과 주요 업무 중심의 화면으로 개편",
            "대출 금액·담보 비율 확인과 상황별 안내·연장·상환 기능을 연결"
          ]
        }
      ],
      "role": "대출 화면의 정보 구조·기능 노출 정책·사용자 흐름 설계",
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
      "title": "보험 상담 신청 경로 개선으로 매출 121% 증가",
      "image": "assets/evidence-hd-12.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "유입 채널과 신청 경로에 따라 보험 상담 신청으로 이어지는 비율에 차이 발생",
            "전환이 낮은 구간을 실험으로 개선해 상담 신청과 매출 확대"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "유입 채널·광고 소재·상담 신청 경로별로 전환 데이터를 나눠 비교",
            "개선 가설과 검증 지표를 정해 채널·소재·신청 경로 실험 설계",
            "상담 신청 목표 달성률·매출을 모니터링하며 경로별 실험 결과 비교"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "상담 신청 경로 개선 전 대비 매출 121% 증가(2024.08 기준)",
            "보험 상담 신청 실적이 목표 대비 최대 152% 달성"
          ]
        }
      ],
      "role": "보험 제품 총괄·전환 구조 분석·실험 및 신청 경로 개선",
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
            "첫 화면의 광고 클릭률은 낮았고, 이용자는 가입 내역과 보장을 먼저 확인하려 함",
            "내 보험과 보장을 첫 화면에 배치하고 필요한 혜택이나 상담으로 연결"
          ]
        },
        {
          "title": "주요 업무",
          "paragraphs": [
            "영역별 클릭률에서 광고 이용이 적은 점을 확인하고, 사용자 인터뷰로 가입 내역과 보장을 먼저 확인하려는 수요 파악",
            "가입한 보험과 보장을 첫 화면에 우선 배치하고, 확인한 뒤 필요한 혜택과 상담으로 연결",
            "개편 전후 홈 이탈과 혜택 이용·상담 신청 전환율 비교"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "홈 이탈 사용자 수가 개편 전 대비 22% 감소",
            "보험 혜택 이용 전환율이 개편 전 대비 38% 증가",
            "보험 상담 신청 전환율이 개편 전 대비 15% 증가"
          ]
        }
      ],
      "role": "보험 홈 PO",
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
      "title": "대출 서비스 성장: 신청 완료율 8배·매출 28배",
      "image": "assets/evidence-hd-14.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "주택 검색·금리 비교·상담 신청 등 여러 단계에서 이탈이 발생",
            "이탈이 생기는 지점부터 개선해 대출 신청·실행 전환과 매출 확대"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "진입·주택 검색·비교·상담 신청·실행 단계의 전환 데이터와 정기 사용자 인터뷰로 이탈 사유·필요 상품 파악",
            "사용자 문제별로 개선 가설·검증 지표·실험안·제품 요구사항을 정하고 기능 개선과 금융사 제휴 과제 발굴",
            "개발 순서와 가용 인력을 고려해 우선순위·일정·리소스를 조율하고 병렬로 진행할 작업 범위 결정",
            "주간·일일 스크럼에서 진행 상황·지연 이슈·일정 변경을 공유하고 실험·연동 결과를 다음 과제에 반영"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "진입 대비 대출·상담 신청 완료율이 개선 전의 8배",
            "서비스 매출이 개선 전의 28배로 증가"
          ]
        }
      ],
      "role": "대출 제품 전략·개선 과제 우선순위·실험 및 실행·성과 관리 총괄",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-s9_orig0.jpg",
          "label": "전환율 분석",
          "caption": "전환율 분석",
          "wide": false,
          "width": 1023,
          "height": 586
        },
        {
          "src": "assets/sep23-s9_orig1.jpeg",
          "label": "매출 추이",
          "caption": "매출 추이",
          "wide": false,
          "width": 1265,
          "height": 547
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "협업 구성",
      "evidenceTitle": "대출 서비스 주요 개선",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner",
      "additionalWork": {
        "id": "case-16",
        "page": 16,
        "company": "toss",
        "title": "개발 우선순위·일정·리소스 관리",
        "image": "assets/slide-16.png",
        "sections": [
          {
            "title": "문제 의식 및 목표",
            "items": [
              "여러 제품 과제를 병행하는 팀이 같은 우선순위로 움직일 수 있도록, 과제 간 의존성과 가용 인력을 고려한 일정·실행 관리"
            ]
          },
          {
            "title": "주요 업무",
            "items": [
              "개발 순서·가용 인력을 기준으로 과제 우선순위·일정·담당 배정",
              "주간·일일 스크럼에서 진행·검토·완료 상태와 지연 요인 점검",
              "일정 변경과 병렬 수행할 작업 범위를 팀에 공유"
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
      "growthResults": [
        {
          "change": "생활자금도 대출 가능하다는 안내를\n시작 화면에 추가",
          "metric": "대출 용도 인지율",
          "result": "62% → 87%"
        },
        {
          "change": "검색 로그로 KB시세 부재 이탈 확인,\n해당 주택을 취급하는 상품 연동",
          "metric": "주택 검색 단계 전환율",
          "result": "개선 전보다 11%p 상승"
        },
        {
          "change": "기존 화면과 시중 금리 비교 화면을\nA/B 테스트해 신청 완료율 비교",
          "metric": "대출·상담 신청 완료율",
          "result": "기존 화면 대비 22% 증가"
        },
        {
          "change": "은행 목록에 1금융권 배지를 추가해\n1금융권 여부를 선택 단계에서 안내",
          "metric": "상담 신청 비중",
          "result": "개선 전 대비 9% 증가"
        },
        {
          "change": "금융사별 요건을 표준 API로 연결,\nQA·실환경 테스트로 연동 검증",
          "metric": "대출 신청 대비 실행률",
          "result": "개선 전의 6배로 증가"
        }
      ],
      "growthSummary": {
        "title": "개선 전 대비 서비스 성과",
        "items": [
          "진입 대비 대출·상담 신청 완료율 8배",
          "서비스 매출 28배"
        ]
      }
    },
    {
      "id": "case-15",
      "page": 15,
      "company": "toss",
      "title": "금융사 22곳 연동, 대출 신청 대비 실행률 6배 개선",
      "image": "assets/evidence-hd-15.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "금융사마다 신청·심사 요건이 달라 상품을 선택해도 대출 실행까지 이어지기 어려움",
            "표준 API로 여러 금융사를 연동해 상품 선택지를 넓히고 신청 후 실행률 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "금융사별 상품 정책과 대출 신청·실행 절차를 비교해 서비스 연동 요구사항 정리",
            "공통으로 사용할 표준 API와 금융사별로 다르게 적용할 연동 규칙 설계",
            "제휴사 운영·개발 담당자와 정책·이슈·연동 일정을 협의하고 필요한 개발 리소스 조율",
            "제품 QA와 실제 환경 테스트로 연동 결과를 확인하고 출시 이후 운영 이슈 대응"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "금융사 약 22곳의 상품·신청 절차 연동",
            "대출 신청 대비 실행률이 개선 전의 6배로 증가"
          ]
        }
      ],
      "role": "제품 총괄·표준 API 및 금융사 연동 정책 설계·제휴사 협업",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-fig_toss_partner.png",
          "label": "표준 API 기반 금융사 연동 구조",
          "caption": "표준 API 기반 금융사 연동 구조",
          "wide": true,
          "width": 2000,
          "height": 980
        },
        {
          "src": "assets/claude-s10_orig0.png",
          "label": "금융사 연동 정책·개발 일정 협의 자료",
          "caption": "금융사 연동 정책·개발 일정 협의 자료",
          "wide": false,
          "width": 1747,
          "height": 837
        },
        {
          "src": "assets/claude-s10_orig1.jpg",
          "label": "금융사별 API 항목 정의 자료",
          "caption": "금융사별 API 항목 정의 자료",
          "wide": false,
          "width": 789,
          "height": 671
        }
      ],
      "galleryColumns": 2,
      "teamLabel": "협업 구성",
      "evidenceTitle": "금융사별 상품·신청 절차를 연결하는 표준 API와 운영 구조",
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
            "기존 대출을 확인하고 갈아탈 상품을 비교·신청하는 과정이 나뉘어 있었음",
            "온라인 대환대출 인프라에 맞춰 기존 대출 조회부터 갈아타기까지 연결"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "정부 대환대출 인프라와 제휴 금융사의 요구사항을 검토해 서비스 제공 범위·정책 정의",
            "사용자 인터뷰로 갈아타기 과정의 불편과 필요한 정보를 파악하고 기존 대출 조회·조건 비교·신청 흐름 설계",
            "상세 기능·화면 설계서를 작성하고 디자인·개발·제휴사와 출시 및 운영 협업"
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
      "role": "서비스 범위·정책·사용자 흐름 설계와 출시 총괄",
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
      "title": "규제 특례로 주택담보대출 온라인 비교 허용",
      "image": "assets/evidence-hd-18.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "대출 조건을 모집인마다 따로 문의해야 했고, 재위탁 규정으로 온라인 비교에 제약",
            "주택담보대출 조건을 온라인에서 비교하고 선택 후 모집인 상담으로 연결"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "당시 주택담보대출의 온라인 이용 비중 약 6%, 은행 대출 실행의 모집인 경유 비중 50~70% 등 시장 지표를 분석해 온라인 중개 기회와 소비자 편익 정리",
            "재위탁 규제 쟁점과 특례 적용 범위를 검토하고 서비스 모델·운영 방안을 규제특례 신청서로 작성",
            "법무·대관·금융소비자보호 담당자와 심사 자료를 준비하고 쟁점별 답변 검토",
            "심사위원회에서 서비스 모델과 소비자 편익을 발표하고 질의에 대응해 혁신금융서비스 지정 추진"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "신청 6개월 만에 금융위원회 혁신금융서비스 신규 지정",
            "모집인이 제시한 주택담보대출 조건을 온라인에서 비교하고 상담으로 연결할 수 있도록 규제 특례 확보"
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
      "position": "대출 Product Owner",
      "evidenceNote": "금융위원회 혁신금융서비스 지정 사례 / 대출모집인을 통한 주택담보대출 비교 플랫폼"
    },
    {
      "id": "case-19",
      "page": 19,
      "company": "toss",
      "title": "대출 중단 원인 분석을 통한 제휴 상품 확대",
      "image": "assets/evidence-hd-19.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "검색·상담 중 대출이 중단되는 원인을 분석하고, 시세 정보가 없거나 한도가 부족한 고객도 이용할 수 있도록 제휴 금융사·상품 확대"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "주택 검색 로그에서 이탈한 주택과 시세 정보 유무를 분석하고, 콜센터 상담 원문은 대출 미실행 사유별로 분류",
            "주택 검색 이탈률 28%, 이탈자의 KB시세 없는 주택 검색 72%, 대출 미실행 사유 중 한도 부족 34%를 확인해 상품 확대 방향 결정",
            "KB시세 없는 주택을 취급하는 금융사와 추가 자금을 지원할 후순위 상품을 찾아 제휴 조건 협의·상품 연동 추진",
            "연동 뒤 주택 검색 단계 전환율과 상품별 매출을 비교해 상품 확대 성과 확인"
          ]
        }
      ],
      "role": "제품 총괄·대출 중단 원인 분석·제휴 상품 기획·연동",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [],
      "galleryColumns": 1,
      "teamLabel": "협업 구성",
      "evidenceTitle": "주택 검색 단계 개선 전 · 후의 퍼널 전환",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner",
      "parts": [
        {
          "id": "case-19-example",
          "page": 19,
          "company": "toss",
          "title": "주택 검색 이탈 원인 분석으로 전환율 11%p 상승",
          "image": "assets/evidence-hd-19.png?v=20260922-results",
          "sections": [
            {
              "title": "문제 의식 및 목표",
              "items": [
                "주택 검색 로그로 시세 정보가 없는 주택의 대출 수요를 확인하고, 해당 수요를 취급하는 상품 확대"
              ]
            },
            {
              "title": "주요 업무",
              "items": [
                "주택 검색 로그에서 이탈한 주택과 KB시세 유무를 분석하고, 이탈자의 72%가 시세 없는 신축 아파트를 검색한 점 확인",
                "KB시세가 없어도 해당 주택을 취급할 수 있는 금융사를 발굴해 제휴 조건 협의",
                "상품 연동 뒤 주택 검색 단계 전환율을 비교해 개선 효과 확인"
              ]
            },
            {
              "title": "결과/성과",
              "items": [
                "주택 검색 단계 전환율이 개선 전보다 11%p 상승",
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
          "position": "대출 Product Owner",
          "supportingDetails": {
            "title": "검색 이탈 분석 근거",
            "rows": [
              {
                "label": "이탈률",
                "text": "주택 검색 단계 이탈률 28%"
              },
              {
                "label": "검색 대상",
                "text": "이탈 사용자의 72%가 KB시세 없는 신축 아파트 검색"
              }
            ]
          }
        },
        {
          "id": "case-20",
          "page": 20,
          "company": "toss",
          "title": "후순위 대출 제휴로 담당 대출 서비스 매출의 최대 28% 창출",
          "image": "assets/evidence-hd-20.png?v=20260922-results",
          "sections": [
            {
              "title": "문제 의식 및 목표",
              "items": [
                "상담 이후 대출 미실행 원인을 분석해 한도 부족 수요를 확인하고, 추가 자금을 지원할 후순위 상품 확대"
              ]
            },
            {
              "title": "주요 업무",
              "items": [
                "제휴사 콜센터 상담 수천 건을 대출 미실행 사유별로 분류하고, 한도 부족이 34%를 차지한 점 확인",
                "당시 담보가치의 최대 90%까지 대출하고 DSR 제약이 없는 후순위 상품을 발굴해 추가 자금 수요 대응",
                "후순위 대출 제휴 금융사 3곳을 연동하고 담당 대출 서비스의 제휴사 매출 비중 확인"
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
              "label": "후순위 대출 제휴로 담당 대출 서비스 매출의 최대 28% 창출",
              "caption": "후순위 대출 제휴로 담당 대출 서비스 매출의 최대 28% 창출",
              "wide": true,
              "width": 782,
              "height": 1601
            }
          ],
          "galleryColumns": 1,
          "teamLabel": "협업 구성",
          "evidenceTitle": "상담 분석을 바탕으로 확대한 대출 상품",
          "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
          "position": "대출 Product Owner",
          "supportingDetails": {
            "title": "상담 원문 분석 근거",
            "rows": [
              {
                "label": "미실행 사유",
                "text": "대출을 실행하지 않은 사용자의 34%가 한도 부족으로 중단"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "case-21",
      "page": 21,
      "company": "toss",
      "title": "대출 비교·신청 경험 개선을 통한 전환 확대",
      "image": "assets/evidence-hd-21.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "금융상품 비교·신청 과정의 정보 이해와 선택의 어려움을 줄이고, 사용자 반응·실험 결과를 바탕으로 신청·상담 전환 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "기존 화면과 공시된 시중 평균 금리 비교 정보를 추가한 화면을 A/B 테스트하고 대출·상담 신청 완료율 비교",
            "신용대출 상환에 맞는 선택지를 이해하도록 ‘대환’ 항목을 ‘생활자금’으로 변경",
            "은행 목록에 1금융권 배지를 표시해 금융사 특성 안내",
            "시작 화면에 주택 구입 외에도 생활자금 용도로 이용할 수 있다는 정보 추가"
          ]
        }
      ],
      "role": "제품 총괄·정보 구조 및 신청 화면 설계·A/B 실험과 성과 분석",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [],
      "galleryColumns": 1,
      "teamLabel": "협업 구성 · 금리 비교 실험",
      "evidenceTitle": "금리 비교 정보를 추가한 A/B 테스트 실험안",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner",
      "parts": [
        {
          "id": "case-21-example",
          "page": 21,
          "company": "toss",
          "title": "시중 평균 금리 비교 화면으로 대출·상담 신청 완료율 22% 증가",
          "image": "assets/evidence-hd-21.png?v=20260922-results",
          "sections": [
            {
              "title": "문제 의식 및 목표",
              "items": [
                "사용자가 제휴 상품의 금리 수준을 판단할 수 있도록 시장 금리 비교 정보를 제공하고 전환 효과 검증"
              ]
            },
            {
              "title": "주요 업무",
              "items": [
                "공시된 시중 평균 금리를 비교 기준으로 삼아, 상품 금리와 함께 보여주는 화면 설계",
                "기존 화면과 금리 비교 정보를 추가한 화면을 A/B 테스트하고 대출·상담 신청 완료율 비교",
                "실험 결과를 바탕으로 금리 비교 정보 노출 방식 적용"
              ]
            },
            {
              "title": "결과/성과",
              "items": [
                "시중 평균 금리 비교 화면의 대출·상담 신청 완료율이 기존 화면 대비 22% 증가"
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
              "label": "시중 평균 금리 비교 정보를 추가한 A/B 테스트 화면",
              "caption": "시중 평균 금리 비교 정보를 추가한 A/B 테스트 화면",
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
          "title": "용어·금융사 정보·대출 용도 안내 개선",
          "image": "assets/evidence-hd-22.png?v=20260922-results",
          "sections": [
            {
              "title": "‘대환’을 ‘생활자금’으로 변경",
              "items": [
                "신용대출 상환에 맞는 선택지를 이해하도록 선택 항목의 용어 변경",
                "생활자금 항목 클릭이 변경 전보다 약 5% 증가"
              ]
            },
            {
              "title": "은행 목록에 1금융권 배지 표시",
              "items": [
                "은행 목록에서 1금융권 여부를 확인할 수 있도록 배지 추가",
                "상담 신청 비중이 표시 전보다 9% 증가"
              ]
            },
            {
              "title": "시작 화면에 생활자금 용도 안내",
              "items": [
                "주택 구입 외에도 생활자금으로 대출을 이용할 수 있음을 안내",
                "대출 용도를 이해한 사용자 비율 62%→87%(차이 25%p)"
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
        }
      ]
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
            "광고 플랫폼마다 연동 요건과 운영 방식이 달라 파트너를 추가할 때마다 여러 조건을 맞춰야 함",
            "국내외 매체·광고주 플랫폼을 연동하고 거래부터 정산까지 이어지는 구조 마련"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "매체 측 플랫폼(SSP)·광고주 측 플랫폼(DSP)을 발굴하고 제휴 제안·계약 협의 진행",
            "계약서·기술 검토 자료를 작성하고 파트너별 연동 요건·운영 기준 정리",
            "연동 뒤 양사 거래 데이터를 대조해 매체 비용과 정산 금액 검증",
            "거래량·클릭률·비용을 모니터링하며 연동·운영·정산 이슈 대응"
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
      "role": "국내외 파트너 제휴·계약·기술 연동·운영 및 정산 관리",
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
      "teamLabel": "수행 인원",
      "evidenceTitle": "매체와 광고주를 연결하는 광고 거래 네트워크",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리"
    },
    {
      "id": "case-24",
      "page": 24,
      "company": "nhn",
      "title": "매체 효율 관리로 연 1.2억 원 절감·앱 매체 월 매출 최대 30% 증가",
      "image": "assets/evidence-hd-24.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "과다 요청과 비정상 클릭이 발생한 매체에 비용이 쓰이고, 매체마다 광고 수익 효율에 차이 발생",
            "부정 비용을 환수하고 매체별 수익 기준을 조정해 광고 매출 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "광고 ID별 하루 요청량·매체 클릭률을 분석해 비정상 트래픽이 의심되는 매체 선별",
            "일 4,320건 초과 요청·클릭률 3% 이상 등 검토 지표와 탐지 근거를 정리해 부정 매체비 환수·정산 공문 작성",
            "노출 1,000회당 수익(eCPM) 기준을 10~30%씩 조정하며 매체별 광고 송출률·매출 변화 비교",
            "기준 변경 뒤에도 송출률·매출을 점검하며 매체별 수익 기준 운영"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "부정 매체비 환수로 연간 비용 1.2억 원 절감",
            "앱 매체 월 매출이 수익 기준 조정 전 대비 최대 30% 증가"
          ]
        }
      ],
      "role": "광고 거래 지표 분석·부정 매체 대응·매체 수익 관리",
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
      "teamLabel": "수행 인원",
      "evidenceTitle": "부정 트래픽 차단과 수익 기준 조정의 두 갈래 개선",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "supportingDetails": {
        "title": "정기 검토에 활용한 탐지 지표",
        "rows": [
          {
            "label": "요청량",
            "text": "광고 ID별 하루 요청 4,320건 초과"
          },
          {
            "label": "클릭률",
            "text": "매체 클릭률 3% 이상 등 비정상 패턴 점검"
          }
        ]
      }
    },
    {
      "id": "case-25",
      "page": 25,
      "company": "nhn",
      "title": "광고 성과·예산 사용 현황을 확인하는 운영 화면 구축",
      "image": "assets/evidence-hd-25.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "광고 성과와 예산 데이터가 엑셀에 흩어져 캠페인 상태를 한눈에 파악하기 어려움",
            "성과 변화와 예산 사용 현황을 한 화면에서 확인할 수 있도록 통합"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "영업·운영 부서의 요청을 수집해 업무별로 필요한 조회 지표와 목적 정리",
            "전환까지의 노출·클릭 빈도와 전일·전전일 같은 시각의 광고비를 비교해 운영 판단을 돕는 지표 설계",
            "지표별 데이터 소스·집계 및 추출 조건을 정의하고 통합 조회 화면의 정보 구조 설계",
            "디자인·개발과 협업해 통합 조회 기능과 예산이 남을 가능성을 표시하는 기능 구현"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "캠페인 성과와 운영 지표를 통합 조회하는 모니터링 화면 구축",
            "예산이 남을 가능성을 미리 보여주는 지표로 운영 판단 지원"
          ]
        }
      ],
      "role": "운영 요구사항·핵심 지표·데이터 조건·모니터링 화면 설계",
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
            "수집한 검색어를 그대로 두면 광고주가 구매 관심사별로 광고 대상에 활용하기 어려움",
            "검색어를 구매 관심사로 분류해 전달하는 맞춤 광고 데이터 상품 출시"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "웹 트래픽 5억 건 중 약 2,500만 건에서 검색 키워드를 매칭할 수 있는지 검토해 사업성 확인",
            "검색어를 이베이 기준 키워드로 통합하고 최근 30일 검색 이력을 적재하는 정책 설계",
            "최근 7일 검색의 최신성·빈도를 점수화해 쿠키별 최상위 관심사 1개를 선정하는 기준 설계",
            "전일 데이터 테스트 결과를 반영해 최신성·빈도 가중치를 동일하게 설정하고, 선정한 관심사 키워드를 이베이 광고에 전달하는 방식 정의"
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
      "role": "사업성 검토·키워드 매칭·관심사 점수화·데이터 전달 정책 설계",
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
            "광고 요청이 내부 DSP에만 전달돼 외부 광고주 수요를 거래로 연결하기 어려움",
            "외부 DSP도 입찰에 참여하도록 거래 구조를 바꿔 추가 매출 확보"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "내부 DSP의 대표 입찰을 먼저 선정한 뒤 외부 DSP와 경쟁시키는 2단계 입찰 구조 설계",
            "실제 입찰 로그로 구조 변경 뒤 매출을 시뮬레이션",
            "입찰 가격 조정안 9개의 손실·추가 수익을 비교해 적용 정책 선정",
            "최저 입찰가·낙찰 규칙과 요청·응답 절차를 정의하고 서비스에 적용"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "외부 DSP 입찰률: 3% 미만→10% 내외",
            "외부 DSP 매출: 2.8억 원→5억 원, 전년 동월 대비 78% 증가",
            "해외 트래픽까지 거래할 수 있는 구조 확보"
          ]
        }
      ],
      "role": "광고 거래 구조·입찰 프로세스·가격 및 낙찰 정책 설계",
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
            "유입 수치만으로는 방문자가 이후 어떤 행동을 했고 어디서 이탈했는지 파악하기 어려움",
            "유입 이후 행동과 광고 반응을 분석해 광고주의 캠페인 개선에 활용"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "광고주의 분석 목적에 맞춰 사용자 행동 가설과 검증 지표 정의",
            "SQL로 사용자 행동·광고 반응 데이터를 추출·가공해 가설 검증",
            "결과를 광고 운영 개선안과 광고주별 맞춤 리포트로 정리해 제공"
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
      "role": "분석 기획·데이터 분석·운영 개선안·리포트 작성",
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
            "광고주가 인플루언서마다 가격을 별도로 문의하고 선입금해야 했음",
            "견적 확인부터 결제·성과 관리까지 한곳에서 할 수 있는 SNS 광고 오픈마켓 출시"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "광고주 약 100명을 인터뷰해 광고 거래 과정·요구사항·시장성 검증",
            "광고주·인플루언서 거래부터 안전결제(에스크로)·캠페인 관리·성과 리포트까지 웹 서비스 기능 설계",
            "디자인·개발과 서비스를 출시하고 광고주·인플루언서 유입 마케팅 실행",
            "출시 뒤 이용 데이터를 바탕으로 거래·운영 정책을 개선하고 투자 유치 추진"
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
      "role": "시장 검증·서비스 기획·출시·운영·투자 유치 등 사업 총괄",
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
      "title": "개인화 메모리",
      "intro": "대화로 알려준 취향과 계획을 기억하고, 직접 저장하거나 바꿔 달라는 요청을 처리하는 개인화 메모리 기획·출시",
      "role": "자동기억·직접요청의 처리 기준과 관리 기능을 설계하고, 쓰기 전 판단 순서와 예시를 바꿔 동작 검증",
      "outcomes": [
        {
          "value": "개인화 메모리 출시",
          "label": "정보 선별·저장부터 사용자 직접 확인·수정·삭제까지 연결"
        }
      ],
      "detailIds": [
        "case-9",
        "case-agent-quality",
        "case-memory-verticals"
      ],
      "labels": [
        "저장·관리",
        "프롬프트·평가",
        "다른 에이전트 활용"
      ],
      "challenge": "대화가 바뀌어도 이전에 알려준 취향과 계획을 이어서 활용해, 사용자 상황에 맞는 답변과 추천 제공",
      "approach": "저장 기준과 사용자 관리 기능 설계 / 메모리를 바꾸기 전에 요청 근거와 변경 범위를 정하도록 프롬프트 개선 / 같은 요청으로 반복 검증",
      "company": "kakao",
      "position": "AI Product Manager"
    },
    {
      "id": "case-5",
      "title": "대화분석 에이전트",
      "intro": "카카오톡 대화를 서버에서 분석해 지난 일정을 찾아주고, 대화 요약이나 답장을 추천하는 에이전트",
      "role": "첫 출시의 이용 흐름과 제공 범위를 설계하고, 질문에 따른 조회 범위와 긴 대화 처리 방식 개선",
      "outcomes": [
        {
          "value": "콘텐츠 최고 공유율 25.52%",
          "label": "7종 중 최고값 · 쇼핑·장소·웹검색 등 다른 에이전트 평균 3.4% 대비 약 7.5배"
        }
      ],
      "detailIds": [
        "case-5",
        "case-6",
        "case-8",
        "case-10"
      ],
      "labels": [
        "기획·출시",
        "긴 대화 처리",
        "답변 품질",
        "공유 콘텐츠"
      ],
      "challenge": "대화 선택부터 답변까지 연결하고, 모델을 바꾸기 어려운 상황에서 같은 한도로 더 많은 대화를 분석할 방법 마련",
      "approach": "대화량을 기준으로 첫 출시 범위를 정한 뒤, 플랫 텍스트와 분할 분석으로 긴 대화에 대응. 답변 품질 평가와 공유 콘텐츠 기획으로 이용 범위 확장",
      "company": "kakao",
      "position": "AI Product Manager"
    }
  ],
  "tossProjects": [
    {
      "id": "toss-loans",
      "company": "toss",
      "position": "Product Owner",
      "title": "대출",
      "intro": "대출 비교·신청·실행의 전환 구조와 개선 우선순위를 관리하고, 금융사 연동·상품 확대·규제특례로 서비스 성장 추진",
      "role": "대출 제품 전략·개발 우선순위·핵심 지표 관리, 신청 과정 개선과 금융사 제휴·연동·제도 대응 총괄",
      "outcomes": [
        {
          "value": "신청 완료율 8배 · 매출 28배",
          "label": "서비스 진입 대비 대출·상담 신청 완료율과 서비스 매출의 개선 전 대비 변화"
        }
      ],
      "detailIds": [
        "case-14",
        "case-15",
        "case-19",
        "case-17",
        "case-18",
        "case-21"
      ],
      "labels": [
        "성장 전략",
        "금융사 연동",
        "상품 확대",
        "갈아타기 출시",
        "규제 특례",
        "신청 과정 개선"
      ]
    },
    {
      "id": "toss-insurance",
      "company": "toss",
      "position": "Product Owner",
      "title": "보험",
      "intro": "첫 화면에서 가입한 보험과 보장이 우선되지 않는 점을 발견해, 내 보험 확인부터 혜택과 상담으로 이어지도록 홈 개편",
      "role": "보험 제품 전략·핵심 지표 관리, 상담 신청 경로·보험 홈 개선과 실험 총괄",
      "outcomes": [
        {
          "value": "매출 121% 증가 · 홈 이탈 22% 감소",
          "label": "상담 신청 경로 개선 · 관리 중심 보험 홈 개편"
        }
      ],
      "detailIds": [
        "case-12",
        "case-13"
      ],
      "labels": [
        "상담 신청 경로",
        "보험 홈 개편"
      ]
    }
  ]
};

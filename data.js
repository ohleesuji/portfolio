// companies의 재직기간 표기는 startDate·endDate(YYYY-MM-DD)에서 자동 계산됩니다. endDate가 null이면 현재까지입니다.
const PORTFOLIO = {
  "companies": [
    {
      "key": "kakao",
      "name": "카카오",
      "role": "AI Product Manager",
      "startDate": "2025-12-01",
      "endDate": null,
      "start": 9,
      "end": 10,
      "intro": "개인화 메모리와 대화분석 에이전트 출시, 긴 대화 처리와 답변 품질 개선",
      "entryId": "case-9"
    },
    {
      "key": "samsung",
      "name": "삼성증권",
      "role": "모니모 서비스 기획·운영",
      "startDate": "2025-02-01",
      "endDate": "2025-11-14",
      "start": 11,
      "end": 11,
      "intro": "대출 가능 금액·담보 상태 확인과 연장·상환 이용 흐름 개선",
      "rank": "수석"
    },
    {
      "key": "toss",
      "name": "토스",
      "role": "대출·보험 Product Owner",
      "startDate": "2021-03-29",
      "endDate": "2024-11-26",
      "start": 12,
      "end": 22,
      "intro": "대출 · 보험 제품 전략 · 우선순위 · 성과 관리, 퍼널 개선 · 금융사 연동 · 규제특례 추진",
      "entryId": "toss-loans"
    },
    {
      "key": "nhn",
      "name": "NHN DATA",
      "role": "광고 플랫폼 Product Manager",
      "startDate": "2017-12-01",
      "endDate": "2021-03-31",
      "start": 23,
      "end": 28,
      "intro": "광고 플랫폼 연동·데이터 상품 기획과 수익·운영 효율 개선",
      "rank": "대리"
    },
    {
      "key": "socialup",
      "name": "소셜업",
      "role": "SNS 광고 오픈마켓 서비스 기획·사업 총괄",
      "startDate": "2014-08-01",
      "endDate": "2017-09-19",
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
            "어느 채팅방에서 한 말인지 모르면 예전 약속이나 기록을 찾기 어려움",
            "카카오톡 대화에서 필요한 내용을 찾아 답하는 에이전트 출시"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "채팅방과 기간 선택, 대화 사용 동의, 분석과 답변까지 화면과 서버 처리 설계",
            "첫 출시는 채팅방 최대 4개를 고르고 동의한 대화를 분석하는 방식으로 제공",
            "분석 후 원문 삭제 기준과 단계별 실패·재시도 흐름 설계",
            "상대가 없으면 조회 기간을 먼저 제안하고, 상대가 있으면 관련 방을 선택하게 개선",
            "메시지마다 반복되는 표기를 줄이고 긴 대화를 나눠 읽은 뒤 한 답변으로 통합",
            "조회할 범위를 바꾸거나 분석 화면을 나갔다 돌아왔을 때의 처리 기준 마련"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "동의한 대화에서 일정 찾기·대화 요약·답장 추천 기능 출시",
            "질문에 따라 여러 방이나 특정 상대의 방을 조회하고 후속 질문까지 연결",
            "같은 대화의 예상 입력 토큰 약 60% 절감",
            "긴 대화를 나눠 약 380일치 분량을 분석하도록 설계",
            "사실 확인 종합 점수 86% → 96%"
          ],
          "notes": [
            "분량 기준: 하루 메시지 약 210개인 채팅방 한 곳으로 산정",
            "채점 기준: 생성된 사실 확인 답변이 카카오톡 원문과 맞는지 평가한 평균"
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
      "title": "같은 모델로 긴 대화를 나눠 읽는 방식 설계",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "모델이 대화를 읽고 답을 쓰는 데 쓸 수 있는 양은 합계 약 26만 토큰",
            "같은 모델에서 긴 대화를 나눠 더 많은 분량을 분석하도록 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "같은 대화의 JSON과 플랫 텍스트를 비교해 메시지마다 반복되는 항목 이름 축소",
            "채팅방마다 읽을 분량을 먼저 배정하고 남는 용량은 대화가 많은 방에 배정",
            "최대 3개 구간을 동시에 읽고 시간순으로 모아 하나의 답변으로 통합",
            "예를 들어 약속 장소가 강남에서 홍대로 바뀌었다면 홍대를 답변에 반영"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "같은 대화의 예상 입력 토큰 약 17,000개 → 6,900개로 약 60% 절감",
            "하루 약 210개가 오가는 채팅방 한 곳의 약 380일치 분량 분석 설계"
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
      "teamLabel": "분할 처리 협업 구성",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager",
      "anchorAliases": [
        "case-token-budget"
      ],
      "evidenceNote": "업로드 상한: 클라이언트에서 한 번에 올릴 수 있는 메시지는 최대 8만 개\n구간당 분량: 약 9천 개(플랫 텍스트, 모델 입출력 합계 약 26만 토큰 기준)\n분할 계산: 8만 개 ÷ 약 9천 개 → 약 9개 구간\n동시 분석: 최대 3개씩 읽고 남은 구간은 이어서 분석\n화면 조회 기간: 선택할 수 있는 날짜 범위는 별도 정책"
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
            "약속이 바뀌었는데 이전 장소를 답하거나 전달한 사람을 행동한 사람으로 판단",
            "카카오톡 원문과 답을 대조해 모델 또는 프롬프트를 바꿀 지점 확인"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "답하기 전에 원문에서 말을 전한 사람과 실제 행동한 사람을 구분하도록 지시",
            "‘내일’은 메시지를 보낸 날 기준으로 해석하고 마지막 변경이나 취소 반영",
            "질문 21개와 채점 기준을 직접 만들고, 모델·프롬프트·추론 설정을 바꾼 5개 조합에서 5회씩 총 525회 비교",
            "날짜·사람·약속을 어디서 틀렸는지 확인하고, 점수와 통과율, 속도 등 8개 지표로 개선안 선정"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "선정 모델·프롬프트에서 사실 확인 종합 점수 86% → 96%",
            "일부 추출·요약 질문 통과율 각 92%, 5개 조합 중 최고",
            "품질 우선 조합은 평균 17.20초 소요. 유사한 품질의 4.98초 조합을 후속 개선 기준으로 선정",
            "내용이 틀린 답변과 답변이 나오지 않은 사례를 구분해 추가 개선 과제 도출"
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
          "caption": "원본 평가표: 답변별 점수는 0~1점, 본문에는 평균을 백분율로 표시",
          "wide": true,
          "width": 2200,
          "height": 1866
        },
        {
          "src": "assets/nov07-agent-builder.png",
          "label": "대화분석 에이전트 모델·프롬프트 구성",
          "caption": "질문에 따라 필요한 도구와 답변 단계를 연결한 에이전트 구성 화면(모델명 익명화)",
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
        "title": "사실 확인 점수와 통과율 기준",
        "rows": [
          {
            "label": "평가 질문",
            "text": "총 525회 비교(질문 21개 × 5개 모델·프롬프트 조합 × 5회 반복)"
          },
          {
            "label": "채점 기준",
            "text": "생성된 사실 확인 답변을 카카오톡 원문과 대조"
          },
          {
            "label": "채점 예시",
            "text": "약속 장소가 바뀌었다면 마지막으로 정한 곳을 답했는지 확인"
          },
          {
            "label": "점수 계산",
            "text": "답변별 0~1점의 평균을 백분율로 변환해 소수점 이하 버림"
          },
          {
            "label": "통과율",
            "text": "75% 이상이면 통과. 답변 생성에 실패하면 미통과로 집계"
          }
        ]
      }
    },
    {
      "id": "case-agent-quality",
      "company": "kakao",
      "position": "AI Product Manager",
      "title": "메모리 저장·수정·삭제 검증과 프롬프트 개선",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "사용자가 말한 필수 조건이 빠지거나 LLM의 제안을 사용자의 선택으로 저장",
            "저장 전에 사용자 말과 기존 기억을 대조해 다음 답변에 쓸 조건 확인"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "실패를 원인별로 묶고 발생 비중과 영향을 비교해 한 유형씩 수정",
            "프롬프트에 기존 기록 조회와 사용자 근거 확인 순서 추가",
            "필수 조건이 빠진 저장 문장은 다시 쓰도록 단계별 예시 추가",
            "도구 호출과 저장 기록을 대조한 뒤 전체를 다시 평가해 이전 정답도 확인"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "222개 저장·수정 시나리오 반복 평가에서 최고 평균 94.6%",
            "저장하기 전에 필수 조건의 누락을 점검하는 절차 설계",
            "저장이 차단된 원문과 판정 점수를 대조해 민감정보 차단 기준 조정안 제안"
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
          "caption": "버전별 실행 기록: 같은 시나리오로 비교, 마지막 행에 최고 평균 94.6% 표시",
          "wide": true,
          "width": 1994,
          "height": 1488
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "평가에서 자주 발견한 저장 오류",
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
            "text": "기대 동작 1점, 일부 충족 0.5점, 오류 0점"
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
        "distributionTitle": "평가에서 자주 발견한 저장 오류",
        "distributionNote": "개선 전 감점 사례 중 주요 2개 유형",
        "distributionHeaders": [
          "순위",
          "오류 유형",
          "감점 사례 중 비중"
        ],
        "distribution": [
          [
            "1위",
            "확인된 새 조건·상태 누락",
            "17.8%"
          ],
          [
            "2위",
            "LLM 응답을 사용자 정보로 저장",
            "13.3%"
          ]
        ],
        "caseTitle": "주방 매트 사례: 사용자 요청과 저장할 내용",
        "caseHeaders": [
          "구분",
          "내용"
        ],
        "caseRows": [
          [
            "사용자가 한 말",
            "“주방 매트 계속 보고 있어. 미끄럼 방지는 꼭 있어야 하고, 잔무늬면 좋지만 다른 디자인도 보여줘.”"
          ],
          [
            "기억에 남길 내용",
            "주방 매트 탐색 중 / 미끄럼 방지 필수\n잔무늬 선호 / 다른 디자인도 고려"
          ]
        ],
        "promptTitle": "프롬프트에 추가한 확인 순서",
        "promptHeaders": [
          "확인 단계",
          "모델이 확인하는 내용"
        ],
        "promptRows": [
          [
            "1. 기존 기억 조회",
            "주방 매트 관련 기존 기록과 유지할 정보 확인"
          ],
          [
            "2. 사용자 말 확인",
            "‘꼭 있어야’ → 미끄럼 방지는 필수\n‘잔무늬면 좋지만’ → 잔무늬는 선호, 다른 디자인도 고려"
          ],
          [
            "3. 저장 문장 점검",
            "저장할 문장에 미끄럼 방지 필수가 있는지 확인\n빠졌으면 문장을 다시 작성하고 잔무늬는 선호로 유지"
          ],
          [
            "4. 실행 결과 대조",
            "저장 도구가 실행됐는지와 실제로 남은 기록 확인"
          ]
        ],
        "goal": "주방 매트를 알아보는 중. 미끄럼 방지는 필수이며, 잔무늬를 선호하지만 다른 디자인도 고려함",
        "goalNote": "저장 목표는 평가에서 기대한 결과"
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
            "새 대화마다 취향과 계획을 다시 설명해야 맞춤 추천을 받을 수 있음",
            "다음에도 쓸 정보를 기억하고, 사용자가 직접 확인·수정·삭제하도록 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "자동기억: 사용자가 새로 알려준 취향이나 조건 중 다음 답변에도 쓸 정보를 선별해 저장",
            "직접 요청: “기억해줘”, “바꿔줘”, “지워줘”를 처리할 때 대상과 적용 범위를 먼저 확인",
            "정보가 적용되는 범위도 함께 저장. 음식 취향은 이후 추천에, 여행 기간은 해당 여행 일정에 활용",
            "지금 사용자가 새로 한 말에서 저장 근거를 찾고, 앞 대화는 생략된 대상이나 정보의 주체를 확인할 때 참고",
            "기억 후보(Memory Signal): 여러 대화에서 관심이 확인돼도 근거가 더 필요한 정보는 후보로 관리",
            "사용자 관리: 기억 요약과 끄기 기능 제공. 민감정보 사전 확인과 삭제한 정보의 재저장 제한(Suppression) 정의"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "개인화 메모리 출시 및 저장 정보 확인·수정·삭제 기능 제공"
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
            "에이전트가 바뀔 때 같은 취향이나 검색 조건을 다시 설명해야 하는 문제",
            "장소·쇼핑 등 여러 에이전트가 최신 기억을 이어 쓰는 방식 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "질문이 들어오는 시점의 최신 기억을 해당 에이전트로 전달하도록 설계",
            "장소 추천에 이전에 말한 음식 취향과 동행 조건을 사용하는 예시 작성",
            "쇼핑에서 선물 후보와 가격대 비교를 이어가는 예시 작성",
            "기억을 답변에 참고하는 경우와 저장된 내용을 바꾸거나 지우는 경우를 연동 가이드에 각각 명시"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "공통 메모리를 여러 에이전트에 전달하는 연동 방식 확정",
            "장소·쇼핑 등 서비스별 활용 가이드 마련"
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
            "예전 기록을 찾아주는 기능이 중심이라 대화방에 공유할 만한 결과가 적었음",
            "카카오톡 대화를 바탕으로 만든 콘텐츠가 실제 공유로 이어지는지 검증"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "톡 나이, 성향 분석, 톡방 시상식 등 7종을 프롬프트로 직접 구현",
            "톡방 시상식에서 수상자를 고른 이유를 해당 대화와 함께 표시",
            "성향 분석에서 관계를 단정하거나 갈등을 일으킬 표현을 제한",
            "서버·모델을 바꾸지 않고 콘텐츠를 구현하고 출시 뒤 클릭·공유 비교"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "톡방 시상식 공유율 25.52%로 구현한 7종 중 최고",
            "다른 에이전트 평균 3.4% 대비 약 7.5배",
            "성향 분석 추천 문구 클릭률 14.7% 확인"
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
          "label": "실제 카나나 응답: 내 톡 나이 봐줘",
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
          "label": "실제 카나나 응답: 톡 대화로 내 성향 분석해줘",
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
          "label": "실제 카나나 응답: 톡방 시상식 해줘",
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
      "evidenceNote": "공유율: 응답 수 대비 공유 수\n비교 기준: 쇼핑·장소·웹검색 등 다른 에이전트 평균 공유율 3.4%\n클릭률: 추천 문구 노출 수 대비 클릭 수"
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
            "메뉴가 9개로 나뉘어 대출 가능 금액과 담보 상태를 바로 확인하기 어려움",
            "대출 상태를 먼저 확인한 뒤 필요한 연장·상환으로 이동하도록 개편"
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
            "어떤 채널과 신청 경로를 거쳤는지에 따라 보험 상담 신청 전환율에 차이",
            "신청 전환이 낮은 곳을 찾아 상담 신청과 매출 개선"
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
      "title": "내 보험을 먼저 보여줘 홈 이탈 사용자 수 22% 감소",
      "image": "assets/evidence-hd-13.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "첫 화면에서 광고는 큰 자리를 차지했지만 클릭률이 낮았음",
            "이용자가 먼저 찾는 가입 내역과 보장을 보여주고 혜택·상담으로 연결"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "보험 홈 PO로서 클릭률을 비교한 뒤 인터뷰에서 방문 목적을 확인",
            "가입한 보험과 보장을 보기 위한 방문 수요를 확인해 첫 화면 우선순위 변경",
            "보험 확인을 마친 뒤 혜택을 이용하거나 상담을 신청하도록 연결",
            "개편 전후 이탈 사용자 수와 혜택·상담 신청 전환율 비교"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "홈 이탈 사용자 수 22% 감소",
            "혜택 이용 전환율 38% 증가",
            "상담 신청 전환율 15% 증가"
          ],
          "notes": [
            "비교 기준: 홈 개편 전 대비"
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
          "label": "개편 전 화면의 영역별 클릭률",
          "caption": "개편 전: 첫 화면의 영역마다 클릭률 비교",
          "wide": false,
          "width": 811,
          "height": 1085
        },
        {
          "src": "assets/claude-image3.png",
          "label": "가입한 보험을 먼저 찾는 사용자 반응",
          "caption": "개편 근거: 첫 화면에서 확인하려는 정보 파악",
          "wide": false,
          "width": 1237,
          "height": 1035
        },
        {
          "src": "assets/claude-image4.png",
          "label": "개편 후 내 보험을 먼저 보여주는 화면",
          "caption": "개편 후: 가입 내역과 보장 정보를 먼저 배치",
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
            "주택 검색, 금리 비교, 상담 신청 단계에서 고객이 각각 다른 이유로 이탈",
            "이탈이 큰 지점부터 개선해 더 많은 고객이 대출·상담 신청을 마치도록 설계"
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
      "title": "금융사 22곳 연동, 대출 신청 대비 실행률 6배",
      "image": "assets/evidence-hd-15.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "금융사마다 받는 정보와 심사·신청 절차가 달라 신청에서 실행까지 연결하기 어려움",
            "상품 선택지를 넓히고 신청 후 실행까지 이어지도록 금융사 연동"
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
            "갈아타려면 기존 대출 조회, 새 조건 비교, 신청을 각각 해야 했음",
            "정부 대환대출 인프라를 연계해 기존 대출 확인부터 신청까지 한 흐름으로 연결"
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
      "title": "규제 특례로 대출 모집인 온라인 비딩 허용",
      "image": "assets/toss-recruiter-bidding.png",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "고객이 모집인마다 대출 조건을 따로 물어봐야 했고, 재위탁 제한으로 온라인 중개가 어려웠음",
            "고객이 한 번 요청하면 모집인이 온라인으로 조건을 제안하고 고객이 비교하도록 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "시장과 상담 경로를 분석해 여러 모집인의 조건을 비교할 때 줄어드는 수고 정리",
            "토스에서 모집인 온라인 비딩을 처음 기획하고 재위탁 특례 신청서 작성",
            "법무·대관·소비자보호 담당자와 허용이 필요한 범위와 심사 근거 검토",
            "심사위원회에서 고객이 조건을 비교하고 상담할 모집인을 고르는 흐름 발표"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "신청 6개월 만에 금융위원회 혁신금융서비스 지정",
            "여러 대출 모집인이 온라인으로 조건을 제안할 수 있는 특례 확보"
          ]
        }
      ],
      "role": "모집인 온라인 비딩 모델 설계, 규제특례 신청서 작성과 심사위원회 발표",
      "contribution": "100%",
      "team": "법무 1명 · 대관 1명 · 금융소비자보호 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/toss-recruiter-bidding.png",
          "label": "모집인 온라인 비딩과 고객 비교·상담 흐름",
          "caption": "모집인 온라인 비딩과 고객 비교·상담 흐름",
          "wide": true,
          "width": 2000,
          "height": 890
        },
        {
          "src": "assets/sep23-s13_orig0.png",
          "label": "혁신금융서비스 특례 신청서 발췌",
          "caption": "혁신금융서비스 특례 신청서 발췌",
          "wide": false,
          "width": 990,
          "height": 450
        },
        {
          "src": "assets/claude-s13_orig1.jpeg",
          "label": "주택담보대출 시장·사업자 분석",
          "caption": "주택담보대출 시장·사업자 분석",
          "wide": false,
          "width": 611,
          "height": 470
        },
        {
          "src": "assets/claude-s13_orig2.jpeg",
          "label": "주택담보대출 온라인 이용 비중 분석",
          "caption": "주택담보대출 온라인 이용 비중 분석",
          "wide": false,
          "width": 599,
          "height": 465
        }
      ],
      "galleryColumns": 3,
      "teamLabel": "협업 구성",
      "evidenceTitle": "모집인 온라인 비딩과 고객 비교·상담 흐름",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "대출 Product Owner",
      "evidenceNote": "금융위원회 혁신금융서비스 지정 / 내게 맞는 대출상담사 비교하기 서비스",
      "evidenceLink": {
        "href": "https://sandbox.fintech.or.kr/business/enterprise.do?id=318&lang=ko",
        "label": "금융규제 샌드박스 지정 사례"
      }
    },
    {
      "id": "case-19",
      "page": 19,
      "company": "toss",
      "title": "검색과 상담에서 발견한 이유로 제휴 상품 확대",
      "image": "assets/evidence-hd-19.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "KB시세가 없는 주택에서 검색이 멈추고 한도 부족으로 대출 실행 중단",
            "검색이나 상담에서 막힌 이유에 맞춰 신청할 수 있는 상품 확대"
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
      "title": "고객이 금리와 상품을 비교하기 쉽게 신청 화면 개선",
      "image": "assets/evidence-hd-21.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "받은 금리가 적절한지 비교할 기준이 없고 대출 용도와 금융사 조건이 불명확",
            "비교에 필요한 정보를 먼저 보여줘 대출·상담 신청으로 이어지도록 개선"
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
      "teamLabel": "금리 비교 실험 협업 구성",
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
            "광고 플랫폼별 연동 요건과 집계 기준이 달라 거래와 정산에서 협의 필요",
            "매체와 광고주 플랫폼을 연결하고 거래부터 정산까지 확인할 기준 마련"
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
      "title": "광고비 연 1.2억 원 절감, 앱 매체 월 매출 최대 30% 증가",
      "image": "assets/evidence-hd-24.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "비정상 요청·클릭에도 비용이 들었고 매체별 광고 수익에 차이가 있었음",
            "부정 비용을 환수하고 매체별 수익 기준을 바꿔 광고 매출 개선"
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
      "title": "광고 성과와 예산을 한 화면에서 확인하는 운영 도구 구축",
      "image": "assets/evidence-hd-25.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "영업·운영팀이 여러 엑셀에서 캠페인 성과와 예산을 확인",
            "캠페인 운영에 필요한 숫자와 예산 소진 추이를 한 화면에 표시"
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
            "검색어 원문만으로는 광고주가 구매 관심사에 맞는 대상을 고르기 어려움",
            "검색 기록에서 가장 관련 있는 관심사 하나를 골라 광고에 쓰는 상품 출시"
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
      "title": "외부 광고 플랫폼 입찰 참여로 외부 DSP 매출 78% 증가",
      "image": "assets/evidence-hd-27.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "광고 요청이 내부 플랫폼에만 전달돼 외부 DSP는 입찰할 기회가 없었음",
            "외부 광고 플랫폼도 같은 자리에 입찰하도록 거래 구조 개선"
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
            "광고주가 인플루언서마다 견적을 물어보고 선입금과 결과 확인까지 직접 해야 했음",
            "인플루언서 탐색, 견적, 안전결제와 성과 관리를 한곳에서 제공"
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
      "intro": "사용자가 알려준 취향과 계획을 기억해 다음 답변에 활용하는 개인화 메모리 기획·출시",
      "role": "저장 정책과 사용자 관리 기능 설계, 오류 분류와 프롬프트 개선·검증",
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
      "challenge": "새 대화에서 같은 조건을 다시 설명해야 했고, 저장한 기억에 필수 조건이 빠지는 사례도 확인",
      "approach": "직접 확인·수정·삭제하는 화면과 저장 기준을 설계. 기존 기록과 사용자의 말을 확인하는 순서를 프롬프트에 넣고, 오류 유형을 하나씩 고치며 전체 재평가",
      "company": "kakao",
      "position": "AI Product Manager"
    },
    {
      "id": "case-5",
      "title": "대화분석 에이전트",
      "intro": "동의한 카카오톡 대화에서 예전 일정을 찾아주고 대화 요약이나 답장을 추천하는 에이전트 기획·출시",
      "role": "대화 사용 동의부터 분석과 답변까지 출시 흐름 설계, 조회 범위와 긴 대화 처리·답변 품질 개선",
      "outcomes": [
        {
          "value": "콘텐츠 최고 공유율 25.52%",
          "label": "7종 중 최고값(쇼핑·장소·웹검색 등 다른 에이전트 평균 3.4% 대비 약 7.5배)"
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
      "challenge": "어느 방에서 얘기했는지 모르면 대화를 찾기 어려웠고, 조회할 방을 늘리면 모델이 읽을 분량도 늘어남",
      "approach": "질문에 맞춰 조회 기간을 제안하고, 입력 형식을 바꿔 긴 대화를 나눠 분석. 실제로 틀린 답을 바탕으로 프롬프트를 고치고, 직접 만든 콘텐츠의 공유율 검증",
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

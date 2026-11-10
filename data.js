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
      "intro": "개인화 메모리의 제품 방향·구축 범위 수립, 대화연동 출시·운영과 모델·프롬프트 품질 개선",
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
      "title": "카카오톡 대화 분석 서비스 기획·출시",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "기기 내 분석(On-device AI)을 서버 분석으로 확장하며, 카카오톡 대화에서 정보를 검색·분석하는 이용 흐름과 데이터 처리 정책 설계",
            "사용자가 대화가 오간 채팅방과 시점을 기억하지 않아도 필요한 정보를 찾을 수 있도록 조회 방식 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "대화 선택·사용 동의·전송부터 분석·답변까지 사용자 화면과 서버 처리 흐름 설계",
            "메시지 수·길이와 화자·시간 정보가 차지하는 입력량을 분석해 초기 제공 범위 설정",
            "분석 후 대화 원문 삭제, 분석 범위 변경, 이탈·재진입·실패 상황의 복구·재시도 정책 수립",
            "대화량과 질문 의도를 기준으로 조회 범위를 정하고, 필요한 채팅방·기간을 추천하는 화면 설계"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "카카오톡 대화의 서버 분석 서비스를 출시하고 대화 선택부터 답변·추가 질문까지 연결",
            "최대 4개 방을 직접 선택하던 방식에서 질문에 맞는 기간의 전체 채팅방을 조회하는 방식으로 확대"
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
          "caption": "질문 의도에 맞는 채팅방·조회 기간 추천",
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
      "evidenceTitle": "질문에 맞는 대화 조회와 근거 기반 답변",
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
            "text": "메시지 수·길이와 보낸 사람·시간의 입력량을 분석해 최대 4개 방·기본 2주로 설정"
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
            "AI의 입력 한도를 넘는 대화도 분석할 수 있도록 입력 형식·분량 배분을 개선하고, 구간별 결과를 하나의 답변으로 연결하는 분석·통합 정책 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "같은 대화 샘플을 JSON과 간결한 텍스트 형식으로 각각 입력해 토큰 수를 비교하고, 반복되는 JSON 항목을 줄이는 형식 적용",
            "대화 내용·보낸 사람·시간은 유지하면서 채팅방별 기본 분량과 남은 입력 용량의 재분배 기준 설계",
            "입력 한도를 넘는 대화를 여러 구간으로 나눠 분석하는 방식을 도입하고, 후속 병렬 처리의 동시 분석량·서버 자원·비용 기준 정리",
            "구간별 결과의 시간순 정렬·변경 정보 반영·중복 및 상충 근거 정리와 실패 구간 재시도 명세 작성"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "동일 대화 샘플의 입력 토큰 약 60% 절감",
            "입력 한도를 넘는 긴 대화를 여러 구간으로 나눠 분석하는 방식 도입",
            "후속 병렬 처리에 필요한 동시 분석량·대화 순서 복원·결과 통합·실패 복구 명세 확정"
          ]
        }
      ],
      "role": "대화 입력·배분 정책과 분할·병렬 분석·결과 통합 정책 설계",
      "contribution": "100%",
      "team": "서버 개발 2명 · AI 모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/hierarchy-format-comparison.svg?v=20261107-readable-originals",
          "label": "같은 대화의 JSON·플랫텍스트 입력 비교",
          "caption": "메시지 내용·보낸 사람·시간을 유지하면서 반복 표시를 줄인 입력 형식",
          "width": 1200,
          "height": 930,
          "wide": true
        },
        {
          "src": "assets/hierarchy-chunk-flow.svg?v=20261107-readable-originals",
          "label": "대화 분할·동시 분석·결과 통합 흐름",
          "caption": "분석 결과를 실제 대화 순서로 통합하고, 실패한 구간만 재시도",
          "width": 1200,
          "height": 1050,
          "wide": true
        }
      ],
      "galleryColumns": 1,
      "teamLabel": "협업 구성 · 분할 처리",
      "evidenceTitle": "입력 형식 경량화와 분할·병렬 분석 설계",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager",
      "anchorAliases": [
        "case-token-budget"
      ],
      "evidenceNote": "동일 대화 샘플 비교: JSON 약 17,000토큰 → 일반 텍스트 약 6,900토큰",
      "supportingDetails": {
        "title": "분할 분석의 오류 대응 기준",
        "rows": [
          {
            "label": "오류 구분",
            "text": "정상 분석했지만 근거가 없는 경우와 분석 자체가 실패한 경우를 구분"
          },
          {
            "label": "복구 기준",
            "text": "실패한 구간만 재시도하고, 확인되지 않은 근거가 포함된 불완전한 답변은 차단하도록 설계"
          }
        ]
      }
    },
    {
      "id": "case-8",
      "page": 8,
      "company": "kakao",
      "title": "모델·프롬프트 개선, 사실 확인 평가 0.860→0.969점",
      "image": "assets/evidence-hd-08.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "대화 원문에 근거한 답변의 정확성을 높이기 위해 모델·프롬프트 변경안을 동일한 기준으로 비교하고, 품질·응답시간을 고려한 개선안 선정"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "대화 분석 질문 21개에 기대 답변과 채점 기준을 붙여 모델·프롬프트를 같은 조건에서 비교할 평가셋 구성",
            "모델·프롬프트·추론 설정 5개 조합을 질문별 5회씩 실행해 총 525회 평가",
            "응답을 대화 원문과 대조해 사실관계·정보 변경 반영·발화자 및 행동 주체 해석 오류 분류",
            "평균 점수·통과율·생성 실패·응답시간 등 8개 지표를 비교하고, 품질과 응답시간을 함께 고려해 후속 개선 조합 선정"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "사실 확인 질문에서 생성에 성공한 답변의 평균 점수 0.860→0.969로 개선(1점 만점)",
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
          "caption": "원본 평가 자료 · 내용 점수는 1점 만점, 통과율·생성 실패·응답시간은 별도 비교",
          "wide": true,
          "width": 2200,
          "height": 1866
        },
        {
          "src": "assets/nov07-agent-builder.png",
          "label": "대화 분석 에이전트 모델·프롬프트 구성",
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
        "title": "평가 점수와 통과율의 기준",
        "rows": [
          {
            "label": "평가 내용",
            "text": "대화에서 최종적으로 바뀐 정보와 실제 발언·행동을 원문·기대 답변과 대조"
          },
          {
            "label": "평균 점수",
            "text": "답변을 0~1점으로 채점 · 사실 확인 질문에서 답변이 만들어진 경우만 평균"
          },
          {
            "label": "통과율",
            "text": "0.75점 이상 통과 · 답변 생성 실패도 미통과로 계산"
          }
        ]
      }
    },
    {
      "id": "case-agent-quality",
      "company": "kakao",
      "position": "AI Product Manager",
      "title": "메모리 처리 품질 개선, 시나리오 평가 평균 94.6%",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "사용자의 의도에 맞는 메모리 저장·수정 품질 확보와 개인정보 보호·개인화 정보 활용을 고려한 저장 차단 기준 수립"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "222개 평가 시나리오와 실제 대화의 저장·수정 결과를 검토해 오류 유형과 발생 원인 분류",
            "오류 원인에 맞춰 프롬프트와 도구 설명을 수정하고, 수정 사례와 기존 정상 사례를 함께 재평가",
            "저장이 차단된 대화 원문과 AI Safety API 판정 점수를 대조해 민감정보 차단과 불필요한 차단 사례 구분",
            "실제 대화 228건·1,502턴의 동작을 별도로 검증하고, 발견한 오류를 평가셋에 추가해 반복 평가"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "메모리 저장·수정 시나리오 평가의 평균 점수 최대 94.6% 확인",
            "실제 대화 228건·1,502턴의 저장·수정 동작을 별도로 검증하고 반복 개선 체계 운영",
            "민감정보가 저장되는 위험과 불필요한 저장 차단을 함께 줄이는 판정 기준 제안"
          ]
        }
      ],
      "role": "메모리 오류 분석·프롬프트 및 도구 설명 개선·판정 기준 검토·반복 평가 주도",
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
          "caption": "원본 실행 기록 · 동일 평가셋으로 프롬프트 버전별 평균 점수 비교",
          "wide": true,
          "width": 1994,
          "height": 1488
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "메모리 처리 기준에 따른 평가 케이스와 버전별 실행 결과",
      "disclaimer": "내부 모델명·프롬프트·식별 정보 비식별화",
      "evaluationGuide": {
        "title": "평가 점수의 기준",
        "rows": [
          {
            "label": "평가 내용",
            "text": "상황별로 저장·수정·제외할 내용을 정한 뒤 실제 처리 결과와 비교"
          },
          {
            "label": "채점",
            "text": "기대 결과 충족 1점 · 일부만 충족 0.5점 · 잘못 처리 0점"
          },
          {
            "label": "94.6%",
            "text": "222개 시나리오의 반복 평가 중 최고 평균 점수 · 서비스 전체 정확도와 구분"
          }
        ]
      },
      "supportingDetails": {
        "title": "실제 대화 검증·저장 차단 기준 검토",
        "rows": [
          {
            "label": "실제 대화",
            "text": "카나나 대화 228건(1,502턴)으로 저장·수정 동작 검증 · 222개 시나리오 평가와 별도 집계"
          },
          {
            "label": "반복 평가",
            "text": "130회 이상 실행 · Codex·Claude를 활용해 수정 전후 결과 분석"
          },
          {
            "label": "차단 검토",
            "text": "저장이 차단된 56건의 원문과 AI Safety API 판정 점수를 대조해 차단의 적정성과 민감정보 누락 위험 검토"
          },
          {
            "label": "조정안",
            "text": "민감정보로 판정해 저장을 막는 기준을 95%로 조정하는 안 협의"
          }
        ]
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
            "대화가 바뀔 때마다 같은 정보를 반복해서 설명하는 불편을 줄이고, 사용자가 개인화에 활용할 정보를 직접 관리할 수 있도록 메모리 기능 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "사용자 발화와 기존 메모리를 비교해 새로 저장할 정보와 갱신·삭제할 정보를 구분하는 처리 정책 설계",
            "바로 저장하기 어려운 정보는 메모리 후보(Memory Signal)로 분리해 관리하는 기준 수립",
            "저장 전 민감·개인정보를 검사하고, 현재 정보 삭제·향후 재저장 금지(Suppression)·기능 중지의 동작을 각각 정의",
            "사용자가 저장된 내용을 확인하고 수정·삭제할 수 있는 메모리 관리 화면 설계"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "정보 선별·저장부터 사용자 확인·수정·삭제와 재저장 금지까지 연결한 메모리 관리 기능 명세 확정"
          ]
        }
      ],
      "role": "메모리 처리 정책·사용자 관리 기능·화면 설계",
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
      "evidenceTitle": "메모리 관리 화면과 저장·수정·삭제 처리 흐름",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager"
    },
    {
      "id": "case-memory-verticals",
      "company": "kakao",
      "title": "여러 AI 서비스가 공유하는 메모리 연동·활용 체계 설계",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "여러 AI 서비스가 동일한 사용자 정보를 일관되게 활용할 수 있도록 공통 메모리의 전달 방식과 답변 적용 원칙 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "각 에이전트가 요청 시점의 최신 사용자 정보를 받을 수 있도록 공통 메모리 전달 방식 정의",
            "질문에 관련된 메모리만 답변에 쓰고, 저장된 정보와 현재 요청이 다르면 현재 요청을 우선하도록 규칙 작성",
            "메모리를 답변에 참고하는 동작과 저장 정보를 수정·삭제하는 동작을 구분해 연동 가이드에 명시",
            "서비스 담당자가 같은 기준으로 연동할 수 있도록 서비스별 적용 범위와 예시 정리"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "여러 AI 서비스에 공통으로 적용할 메모리 전달·활용 기준과 서비스 담당자의 연동 가이드 설계 완료"
          ]
        }
      ],
      "role": "공통 메모리 연동 정책·답변 적용 원칙·서비스별 가이드 설계",
      "team": "기획 1명",
      "originals": [
        {
          "src": "assets/hierarchy-memory-verticals.svg?v=20261107-readable-originals",
          "label": "공통 메모리와 버티컬 에이전트별 활용 기준",
          "caption": "활용 예: 장소·쇼핑·선톡·사주 · 같은 메모리 중 현재 요청에 필요한 정보만 답변에 반영",
          "wide": true,
          "width": 1200,
          "height": 1060
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": "공통 메모리를 활용하는 서비스별 답변 기준",
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
            "정보 검색 중심의 대화 분석 서비스를 공유형 콘텐츠로 확장하고, 대화 데이터를 활용한 새로운 이용 동기와 자발적 공유 수요 검증"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "톡 나이·TBTI·톡방 시상식 등 대화 특성을 활용한 콘텐츠 7종의 추천 문구·프롬프트·응답 형식 작성",
            "대화 근거와 점수·유형을 함께 제시하는 형식으로 구현해 결과를 이해하고 친구와 비교·공유할 수 있도록 구성",
            "TBTI는 MBTI 패러디로 정의하고, 관계를 단정하거나 갈등을 유발하지 않도록 해석 범위와 답변 원칙 설정",
            "서버·모델 변경 없이 프롬프트로 콘텐츠를 구현하고 추천 문구 노출 대비 클릭률, 응답 수 대비 공유율 비교"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "톡방 시상식 공유율 25.52%로 구현한 7종 콘텐츠 중 최고 기록",
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
            "대출 현황을 파악하고 필요한 업무를 바로 처리할 수 있도록, 메뉴 중심 화면을 상태 확인·주요 이용 기능 중심으로 개편"
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
            "유입부터 상담 신청까지의 전환 구조를 분석하고 채널·신청 경로를 개선해, 보험 상담 수요를 실제 신청·매출로 연결"
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
            "보유 보험 확인·분석 수요에 맞춰 홈을 개편하고, 보험 관리 경험을 혜택·상담 이용으로 연결하는 화면 흐름 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "사용자 인터뷰와 이용 데이터에서 보유 보험 확인·분석 수요와 광고 영역의 낮은 클릭률 확인",
            "광고 중심이던 홈을 보유 보험 확인·분석 기능에 먼저 접근할 수 있는 정보 구조로 개편",
            "보험 관리 기능을 보험 혜택·상담 신청으로 이어지는 화면 동선과 연결",
            "개편 전후 홈 이탈 사용자 수와 보험 혜택 이용·상담 신청 전환율 비교"
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
      "role": "보험 제품 총괄·보험 홈 정보 구조·이용 흐름 설계와 성과 분석",
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
            "진입·신청·실행 단계에서 이탈 원인을 찾고, 기능 개선·실험·금융사 제휴를 추진해 신청 전환과 매출 확대"
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
            "제휴 금융사 확대와 금융사별 대출 절차의 안정적인 연동을 통해 상품 선택지를 넓히고, 대출 신청 이후 실행률 개선"
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
            "온라인 대환대출 인프라를 활용해 기존 대출 조회·조건 비교부터 갈아타기 신청까지 연결하는 주택담보대출 서비스 출시"
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
      "title": "규제 샌드박스로 6개월 만에 혁신금융서비스 지정",
      "image": "assets/evidence-hd-18.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "모집인 중심 시장의 온라인 비교·중개 기회를 검토하고, 재위탁 규제로 제약된 서비스 모델을 추진하기 위한 규제특례·제도적 기반 확보"
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
            "국내외 광고 공급·구매 플랫폼과의 제휴를 확대하고, 계약·기술 연동부터 운영·정산까지 연결하는 광고 거래 기반 구축"
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
            "광고 거래 지표를 정기적으로 분석해 부정 트래픽에 따른 비용 낭비를 줄이고, 매체별 수익 기준 조정을 통한 광고 매출 개선"
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
            "엑셀에 분산된 캠페인 지표를 통합하고, 성과 변화와 예산이 남을 가능성을 함께 확인하는 모니터링 화면 구축"
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
            "검색 데이터를 구매 관심사로 분류해 광고에 활용할 수 있도록, 데이터 매칭·보관·점수화·전달 정책 설계와 맞춤 광고 상품 출시"
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
            "내부 광고주 플랫폼에 한정된 거래를 외부 DSP까지 확장해, 추가 광고 수요·해외 트래픽을 매출로 연결하는 입찰 체계 설계"
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
            "광고주의 캠페인 운영을 지원하기 위해 유입 이후의 사용자 행동·광고 반응을 분석하고, 가설 검증부터 개선 제안까지 맞춤 분석 제공"
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
            "광고주·인플루언서의 개별 문의·선입금 중심 거래를 개선하고, 거래 조건 확인·결제·성과 관리를 지원하는 SNS 광고 오픈마켓 창업"
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
      "intro": "사용자 정보를 이후 대화에도 활용하는 개인화 메모리의 저장·관리 정책과 품질 평가, 여러 AI 서비스의 공통 연동 기준 설계",
      "role": "제품 방향·개발 범위, 메모리 처리 정책·관리 기능·품질 평가·공통 연동 기준 설계 총괄",
      "outcomes": [
        {
          "value": "개인화 메모리 구축",
          "label": "정보 선별·저장부터 사용자 관리와 공통 연동까지 기능·정책 설계 완료"
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
      "challenge": "대화나 서비스가 바뀔 때마다 같은 취향·계획을 반복해 설명하는 불편을 줄이고, 사용자가 알려준 정보를 다음 답변에 활용하는 개인화 경험 설계",
      "approach": "메모리 저장·수정·삭제 정책과 관리 화면을 설계하고, 실제 오류를 바탕으로 프롬프트 개선·반복 평가 진행. 장소·쇼핑 등 다른 AI 서비스의 활용 기준까지 확장",
      "company": "kakao",
      "position": "AI Product Manager"
    },
    {
      "id": "case-5",
      "title": "카카오톡 대화연동",
      "intro": "카카오톡 대화에 근거한 정보 검색·분석 AI 서비스를 기획·출시하고, 서버 분석·대용량 대화 처리·답변 품질·공유 콘텐츠로 확장",
      "role": "초기 제공 범위·출시·운영 총괄, 대화량과 평가 결과에 따른 조회·처리 방식 및 답변 품질 개선",
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
        "서비스 출시",
        "긴 대화 처리",
        "답변 품질",
        "공유 콘텐츠"
      ],
      "challenge": "기기 내 분석(On-device AI)을 서버로 확장하면서, 사용자의 질문부터 대화 선택·분석·답변까지 하나의 흐름으로 연결하고 대량 대화에 대응할 처리 기준 수립",
      "approach": "초기 제공 범위와 이용 정책 수립, 서버 분석 첫 출시 주도. 출시 후 실제 대화량과 평가 결과를 바탕으로 모델·프롬프트, 조회 범위와 대량 대화 처리 방식 개선",
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
      "intro": "유입·보험 관리·상담 신청의 이용 흐름을 정비하고, 채널 실험과 관리 중심 홈 개편으로 전환·매출 개선",
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

const PORTFOLIO = {
  "companies": [
    {
      "key": "kakao",
      "name": "카카오",
      "role": "카나나 AI Product Manager",
      "period": "2025.12.01 ~ 현재",
      "duration": "약 10개월",
      "start": 5,
      "end": 10,
      "intro": "카카오톡 대화 기반 AI 제품의 방향 · 전략 수립, 우선순위 · 성과 관리"
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
      "title": "과거 대화를 이해하는 대화연동 에이전트 0→1 구축",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "웹 검색으로는 찾을 수 없는 나의 일정 · 기억 · 관계 카카오톡에만 있는 과거 대화를 찾아 요약 · 분석하는 새로운 AI 경험을 0에서 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "하루 말풍선 수 · 메시지 길이로 기간별 토큰 사용량 계산",
            "계산 결과로 최대 4개 방 · 기본 2주 조회 범위 설정",
            "반복 필드를 줄인 규칙형 텍스트 입력 형식 제안",
            "요청 유형 8종과 대화 선택→분석 흐름 설계",
            "동의 · 원문 즉시 삭제와 후속 질문 처리 기준 수립"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "대화 선택부터 답변까지 MVP 전 과정 정책 확정",
            "대화량 상위 5%도 담는 기본 4개 방 · 2주 범위 확정",
            "입력 형식 변경으로 토큰 약 60% 절감",
            "추가 질문은 3시간 동안 채팅방 재선택 없이 이어서 진행"
          ]
        }
      ],
      "role": "서비스 · UX · 정책 기획",
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
      "id": "case-7",
      "page": 7,
      "company": "kakao",
      "title": "질문 의도로 알맞은 채팅방 · 기간을 찾아 답하는 대화 탐색",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "MVP는 사용자가 채팅방 · 기간을 직접 골라야 분석 가능 대화가 오간 방과 시점을 기억해야 하는 부담이 크고, 질문 속 날짜만으로는 알맞은 조회 범위를 정할 수 없음"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "질문 의도를 해석해 LLM이 채팅방 · 기간을 추천하는 구조",
            "과거 시점형: 해당 시점 전후 전체 채팅방 조회",
            "최근 맥락형: 성격 · 일정 · 할 일은 최근 7일 전체 조회",
            "특정 상대형: 상대가 핵심인 요청은 해당 채팅방 선택",
            "최근 7일 대화량이 토큰 한도의 81.5%로 수용 범위 확인"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "채팅방 · 기간을 고르지 않아도 질문만으로 분석 시작",
            "채팅방 4개 선택 제한 없이 전체 대화에서 근거 탐색",
            "추천 범위 확인 후 [바로 확인하기]로 즉시 시작"
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
      "title": "여러 대화를 동시에 분석해 레이턴시를 1/3로 줄인 병렬 처리 설계",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "전체 채팅방 조회로 분석할 대화가 크게 늘어남 순서대로 분석하면 대기 시간이 쌓이고, 일부 구간 결과만 답변에 반영되는 문제"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "대화를 나눠 최대 3개 구간을 동시에 분석",
            "구간별로 답변에 쓸 근거가 있는지 판단 기준 정의",
            "중복 제거 · 시간 흐름 연결로 결과를 하나로 통합",
            "성공한 분석은 유지하고 실패한 구간만 재시도",
            "재시도 후 실패 시 일부 결과로 답하지 않도록 처리"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "순차 분석 대비 응답 레이턴시 1/3로 단축",
            "요약 · 관계 분석에 전체 대화 맥락 반영",
            "답 없음과 분석 오류를 구분한 처리 기준 정리",
            "분할부터 통합까지 처리 흐름 · 입출력 명세 수립"
          ]
        }
      ],
      "role": "병렬 처리 · 결과 통합 · 실패 재시도 정책 기획",
      "contribution": "100%",
      "team": "서버 2명 · 모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/pm-chunk-flow.png",
          "label": "여러 대화를 동시에 분석해 레이턴시를 1/3로 줄인 병렬 처리 설계",
          "caption": "여러 대화를 동시에 분석해 레이턴시를 1/3로 줄인 병렬 처리 설계",
          "wide": true,
          "width": 2283,
          "height": 1342
        }
      ],
      "galleryColumns": 1,
      "teamLabel": "협업 구성",
      "evidenceTitle": "순서대로 분석하던 방식을 동시 분석 · 결과 통합으로 전환",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager"
    },
    {
      "id": "case-8",
      "page": 8,
      "company": "kakao",
      "title": "헷갈리는 대화 21건 · 525회 반복 평가로 정한 분석 모델 기준",
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
      "id": "case-9",
      "page": 9,
      "company": "kakao",
      "title": "나를 기억해 더 맞춤형으로 답하는 카나나 메모리 기획",
      "image": "assets/evidence-hd-09.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "대화할 때마다 배경과 선호를 다시 설명해야 하고, 누구에게나 같은 일반적인 답변이 돌아오는 한계 기억한 정보로 나에게 맞춘 답을 주는 개인화 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "대화 속 자동 기억과 직접 요청 기억의 기준 정의",
            "기억 확인 · 수정 · 삭제를 대화와 설정 화면에 연결",
            "오래 쓸 정보와 저장하면 안 되는 정보 구분",
            "메모리 켜기 · 끄기와 삭제 동작 차이 정리",
            "지운 기억이 다시 저장되지 않도록 방지 규칙 설계"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "생활 · 관심사 · 답변 스타일 등 기억 8종 분류 정의",
            "주민번호 · 계좌번호 등 민감정보 저장 차단 기준 확정",
            "기억 요약 · 설정 · 삭제의 화면별 동작 기준 마련",
            "메모리 MVP 출시 범위와 기능 명세 확정"
          ]
        }
      ],
      "role": "메모리 MVP 서비스 · UX · 정책 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 서버 1명 · 모델 1명 · FE 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/refresh-30-mem_consent.png",
          "label": "첫 사용 안내",
          "caption": "첫 사용 안내",
          "wide": false,
          "width": 512,
          "height": 1054
        },
        {
          "src": "assets/refresh-30-mem_setting.png",
          "label": "켜기 · 끄기 · 삭제",
          "caption": "켜기 · 끄기 · 삭제",
          "wide": false,
          "width": 516,
          "height": 1044
        },
        {
          "src": "assets/refresh-30-mem_summary.png",
          "label": "기억한 내용 요약",
          "caption": "기억한 내용 요약",
          "wide": false,
          "width": 508,
          "height": 954
        },
        {
          "src": "assets/refresh-30-mem_doc_blur.png",
          "label": "기억 처리 흐름",
          "caption": "기억 처리 흐름",
          "wide": true,
          "width": 1666,
          "height": 1058
        }
      ],
      "galleryColumns": 3,
      "teamLabel": "협업 구성",
      "evidenceTitle": "메모리 첫 안내 · 설정 · 요약 화면과 기억 처리 흐름",
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "position": "AI Product Manager"
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
          "src": "assets/refresh-951-fig_nhn_admin.png",
          "label": "엑셀 수기 관리에서 통합 모니터링 화면으로 전환",
          "caption": "엑셀 수기 관리에서 통합 모니터링 화면으로 전환",
          "width": 2257,
          "height": 800,
          "wide": true
        },
        {
          "src": "assets/refresh-951-nhn_admin.jpg",
          "label": "운영 어드민 설계 자료",
          "caption": "운영 어드민 설계 자료",
          "width": 933,
          "height": 703,
          "wide": false
        }
      ],
      "galleryColumns": 1,
      "evidenceTitle": ""
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
          "src": "assets/refresh-950-fig_nhn_dsp.png",
          "label": "외부 DSP까지 참여하는 2차 입찰 구조로 전환",
          "caption": "외부 DSP까지 참여하는 2차 입찰 구조로 전환",
          "width": 2257,
          "height": 900,
          "wide": true
        },
        {
          "src": "assets/refresh-950-exchange_flow.jpeg",
          "label": "입찰 요청과 응답 흐름 설계 자료",
          "caption": "입찰 요청과 응답 흐름 설계 자료",
          "width": 1014,
          "height": 510,
          "wide": false
        }
      ],
      "galleryColumns": 1,
      "disclaimer": "일부 내부 자료는 공개 가능한 범위에서 발췌 · 비식별화 처리",
      "evidenceTitle": ""
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
  ]
};

const PORTFOLIO = {
  "companies": [
    {
      "key": "kakao",
      "name": "카카오",
      "role": "카나나 AI 서비스 기획",
      "period": "2025.12.01 ~ 현재",
      "duration": "9개월 21일",
      "start": 5,
      "end": 10,
      "intro": "카카오톡 대화 맥락을 활용한 AI 에이전트와 개인화 경험 기획"
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
      "intro": "퍼널 분석과 실험, 금융사 제휴와 규제특례를 통한 제품 성장"
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
            "웹 검색으로는 찾을 수 없는 나의 일정·기억·관계. 카카오톡에만 있는 과거 대화를 찾아 요약·분석하는 새로운 AI 경험을 0에서 설계"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "하루 말풍선 수·메시지 길이로 기간별 토큰 사용량 계산",
            "계산 결과로 최대 4개 방·기본 2주 조회 범위 설정",
            "반복 필드를 줄인 규칙형 텍스트 입력 형식 제안",
            "요청 유형 8종과 대화 선택→분석 흐름 설계",
            "동의·원문 즉시 삭제와 후속 질문 처리 기준 수립"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "입력 형식 비교 실험에서 원본 JSON 대비 토큰 약 60% 절감"
          ]
        }
      ],
      "role": "서비스·UX·정책 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 클라 2명 · 서버 2명 · 모델 1명 · FE 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-v4-image.png",
          "label": "과거 대화를 이해하는 대화연동 에이전트 0→1 구축",
          "wide": false,
          "width": 786,
          "height": 1704
        },
        {
          "src": "assets/claude-v4-image2.png",
          "label": "과거 대화를 이해하는 대화연동 에이전트 0→1 구축",
          "wide": false,
          "width": 478,
          "height": 948
        },
        {
          "src": "assets/claude-v4-image3.png",
          "label": "과거 대화를 이해하는 대화연동 에이전트 0→1 구축",
          "wide": false,
          "width": 450,
          "height": 884
        }
      ],
      "galleryColumns": 3
    },
    {
      "id": "case-7",
      "page": 7,
      "company": "kakao",
      "title": "채팅방 선택 없이 발화만으로 찾는 전체 대화 탐색",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "대화가 오간 방과 시점을 사용자가 기억해야 하는 부담. “이번 주 일정”처럼 질문 속 날짜와 실제 조회할 기간이 다른 요청도 답하도록 탐색 범위 확장"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "여러 채팅방에서 근거를 찾는 전체 조회 정책 설계",
            "과거 시점·최근 맥락·특정 상대별 조회 방식 정의",
            "추천 기간을 보여주고 바로 분석하는 흐름 설계",
            "조회 범위·저장 여부를 알리는 안내 문구 설계",
            "늘어난 입력량을 검토해 병렬 분석 과제로 연결"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "직접 고른 4개 방에서 전체 채팅방 탐색으로 확장",
            "[바로 확인하기]로 채팅방 선택 없이 즉시 분석",
            "일정·할 일 요청까지 최근 7일 전체 조회로 응답",
            "추천 기간을 확인하고 바꿀 수 있는 흐름 제공"
          ]
        }
      ],
      "role": "조회 경험·프롬프트·정책 기획 및 데이터 분석",
      "contribution": "100%",
      "team": "디자인 1명 · 서버 1명 · 모델 1명 · FE 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-scope_screen_a.png",
          "label": "조회 범위와 기간 안내",
          "wide": false,
          "width": 598,
          "height": 1044
        },
        {
          "src": "assets/claude-scope_screen_b.png",
          "label": "대화에 근거한 응답",
          "wide": false,
          "width": 602,
          "height": 1078
        },
        {
          "src": "assets/claude-scope_policy_table.png",
          "label": "질문 유형별 조회 정책",
          "wide": true,
          "width": 2098,
          "height": 338
        }
      ],
      "galleryColumns": 2
    },
    {
      "id": "case-6",
      "page": 6,
      "company": "kakao",
      "title": "여러 대화를 동시에 분석해 하나의 답변으로 통합",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "전체 채팅방 조회로 분석할 대화가 크게 늘어남. 순서대로 분석하면 대기 시간이 쌓이고, 일부 구간 결과만 답변에 반영되는 문제"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "대화를 나눠 최대 3개 구간을 동시에 분석",
            "구간별로 답변에 쓸 근거가 있는지 판단 기준 정의",
            "중복 제거·시간 흐름 연결로 결과를 하나로 통합",
            "성공한 분석은 유지하고 실패한 구간만 재시도",
            "재시도 후 실패 시 일부 결과로 답하지 않도록 처리"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "대화 분할·병렬 분석·답변 통합 흐름과 입출력 명세 수립",
            "답변 근거 없음과 분석 오류를 구분한 재시도 기준 확정"
          ]
        }
      ],
      "role": "병렬 처리·결과 통합·실패 재시도 정책 기획",
      "contribution": "100%",
      "team": "서버 2명 · 모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-chunk_asis_tobe.png",
          "label": "여러 대화를 동시에 분석해 한 번에 답하는 병렬 처리 설계",
          "wide": true,
          "width": 1640,
          "height": 964
        }
      ],
      "galleryColumns": 1
    },
    {
      "id": "case-8",
      "page": 8,
      "company": "kakao",
      "title": "헷갈리는 대화 21건·525회 반복 평가로 정한 분석 모델 기준",
      "image": "assets/evidence-hd-08.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "긴 대화에서 정보 누락·화자 혼동 오류 발생",
            "동일한 대화를 반복 평가해 모델별 정확도·안정성을 비교할 기준 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "사실 확인 8건·정보 추출 7건·흐름 요약 6건, 평가 케이스 21건 설계",
            "케이스별 혼동 지점·기대 답변·필수 채점 포인트 정의",
            "5개 모델·프롬프트 조합 × 21개 케이스 × 각 5회 반복, 총 525회 실행",
            "내용 품질·전체 PASS·실행 오류·평균 및 P95 응답 시간·유형별 정확도 8개 지표 비교",
            "실패 응답을 원문과 대조해 정보 누락·주체 혼동·요약 범위 오류 분류"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "품질·응답 속도·실행 안정성을 비교해 모델 B의 단계 추론 설정을 균형 기준안으로 선정",
            "사실 확인 응답 품질 0.860 → 0.969 개선 (정상 응답의 0~1점 평균)",
            "정정된 최종 정보 찾기 사례: 모델 A 기본 설정 0/5회 성공, 선정 설정 5/5회 성공",
            "정답이 명확한 추출·요약 평가군에서 PASS율 각각 92% 확인",
            "선정 설정의 전체 PASS율 80.0%·실행 오류 10/105건, 복합 추출 개선 과제 도출"
          ]
        }
      ],
      "role": "평가 케이스 설계·모델 비교 실험·고도화 정책 기획",
      "contribution": "100%",
      "team": "모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-evaluation-original.png",
          "label": "평가 케이스·8개 지표 비교·분석 모델 선정 근거",
          "width": 2200,
          "height": 1866,
          "wide": true
        }
      ],
      "evidenceNote": "유형별 점수는 실행 오류를 제외한 정상 응답의 0~1점 평균. 전체 PASS율은 실행 오류를 포함한 105회 기준. 92%는 정답이 명확한 추출·요약 평가군의 수치.",
      "galleryColumns": 1
    },
    {
      "id": "case-9",
      "page": 9,
      "company": "kakao",
      "title": "사용자 맥락을 기억해 맞춤형 답변을 제공하는 메모리 기획",
      "image": "assets/evidence-hd-09.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "사용자의 배경·선호·관심사를 기억해 상황에 맞는 답변 제공",
            "이전 대화의 정보를 다음 응답에 활용해 같은 설명을 반복하는 불편 감소"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "대화 속 자동 기억과 직접 요청 기억의 기준 정의",
            "기억 확인·수정·삭제를 대화와 설정 화면에 연결",
            "오래 쓸 정보와 저장하면 안 되는 정보 구분",
            "메모리 켜기·끄기와 삭제 동작 차이 정리",
            "지운 기억이 다시 저장되지 않도록 방지 규칙 설계"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "기억 8종 분류 체계로 개인화 범위 정의",
            "주민번호·계좌번호 등 민감정보 저장 차단 기준 확정",
            "기억 요약·설정·삭제의 화면별 동작 기준 마련",
            "메모리 MVP 출시 범위와 도구 명세 확정"
          ]
        }
      ],
      "role": "메모리 MVP 서비스·UX·정책 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 서버 1명 · 모델 1명 · FE 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-mem_consent.png",
          "label": "메모리 첫 사용 안내",
          "wide": false,
          "width": 512,
          "height": 1054
        },
        {
          "src": "assets/claude-mem_setting.png",
          "label": "메모리 켜기·끄기와 삭제",
          "wide": false,
          "width": 516,
          "height": 1044
        },
        {
          "src": "assets/claude-mem_summary.png",
          "label": "기억한 내용 요약",
          "wide": false,
          "width": 508,
          "height": 954
        },
        {
          "src": "assets/claude-mem_doc_blur.png",
          "label": "메모리 처리 흐름과 정책",
          "wide": true,
          "width": 1666,
          "height": 1058
        }
      ],
      "galleryColumns": 3
    },
    {
      "id": "case-10",
      "page": 10,
      "company": "kakao",
      "title": "대화로 만든 공유형 콘텐츠 7종, 톡방 시상식 공유율 41%",
      "image": "assets/evidence-hd-10.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "나와 친구의 대화 특징을 재미있는 콘텐츠로 만들어 결과 비교·공유를 통한 자발적 확산 유도"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "말투 나이·AI 판결소·톡방 시상식·TBTI 등 공유형 콘텐츠 7종 구현",
            "콘텐츠별 시작 발화·응답 구성·결과 형식 설계",
            "MBTI 형식을 응용한 대화 성향 콘텐츠 TBTI 기획",
            "점수·유형명·실제 대화 근거를 연결해 공유할 이유 제공",
            "1:1·단톡방·개인 캡처 등 공유 방식과 관계 악화를 줄이는 완충 문장 설계"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "톡방 시상식 응답 대비 공유율 41%",
            "개인 분석부터 톡방 단체 콘텐츠까지 7종 구현",
            "서버·모델 변경 없이 프롬프트로 콘텐츠를 추가하는 구조 마련"
          ]
        }
      ],
      "role": "공유형 콘텐츠 기획·응답 설계",
      "contribution": "100%",
      "team": "모델 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/viral-age-private.png",
          "label": "내 톡 나이 봐줘 · 실제 카나나 응답",
          "prompt": "내 톡 나이 봐줘",
          "width": 283,
          "height": 701
        },
        {
          "src": "assets/viral-tbti-private.png",
          "label": "톡 대화로 내 성향 분석해줘 · 실제 카나나 응답",
          "prompt": "톡 대화로 내 성향 분석해줘",
          "width": 234,
          "height": 542
        },
        {
          "src": "assets/viral-award-private.png",
          "label": "톡방 시상식 해줘 · 실제 카나나 응답",
          "prompt": "톡방 시상식 해줘",
          "width": 342,
          "height": 1014
        },
        {
          "src": "assets/viral-judge-private.png",
          "label": "우리 중에 누가 잘못했어? · 실제 카나나 응답",
          "prompt": "우리 중에 누가 잘못했어?",
          "width": 330,
          "height": 1020
        }
      ],
      "galleryColumns": 2,
      "responseExamples": true
    },
    {
      "id": "case-11",
      "page": 11,
      "company": "samsung",
      "title": "대출 상태 시각화로 높인 연장·실행 전환",
      "image": "assets/evidence-hd-11.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "대출 가능 금액과 담보 비율을 확인하기 어렵고, 일괄 노출된 메뉴만으로 필요한 행동을 찾기 어려움. 상태를 쉽게 이해하고 다음 행동으로 연결하도록 개선"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "대출 가능 금액·담보 비율을 바 차트로 시각화",
            "사용자 상황에 필요한 기능을 우선 노출",
            "불필요한 메뉴를 숨겨 정보 탐색 부담 축소",
            "담보 부족과 대출 연장 시점을 알리는 기능 추가"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "대출 연장률 및 실행 전환율 개선",
            "담보 부족 인지 개선으로 연체 리스크 감소",
            "대출 상태와 담보 부족 여부를 한눈에 확인"
          ]
        }
      ],
      "role": "제품 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 4명 · 데이터 분석 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-integrated-9-image13.png",
          "label": "대출 상태 시각화로 높인 연장·실행 전환",
          "wide": false,
          "width": 245,
          "height": 533
        },
        {
          "src": "assets/claude-integrated-9-image14.png",
          "label": "대출 상태 시각화로 높인 연장·실행 전환",
          "wide": false,
          "width": 237,
          "height": 533
        }
      ],
      "galleryColumns": 2
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
            "보험 상담 수요가 실제 신청으로 이어지는 경로의 전환 개선 필요",
            "상담 리드 확대와 매출 성장을 위한 유입 채널·신청 경로 검증"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "상담 신청 경로와 전환 데이터를 분석해 개선안 도출",
            "신규 유입 확대를 위한 채널·소재별 성과 분석",
            "주요 지표 모니터링과 성과 리포팅",
            "가설을 세우고 실험해 효과적인 신청 경로 검증"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "매출 121% 증가 (2024년 8월 기준)",
            "보험 상담 신청 목표 달성률 최대 152%"
          ]
        }
      ],
      "role": "제품 총괄 및 실험·서비스 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 2명 · 데이터 분석 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-image1.png",
          "label": "보험 상담 신청 경로 개선으로 매출 121% 성장",
          "wide": true,
          "width": 1493,
          "height": 655
        }
      ],
      "galleryColumns": 1
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
            "광고 중심의 보험 홈과 달리 사용자는 보유 보험 확인과 분석을 원해 광고 영역의 클릭률이 낮았음. 보험 관리 경험을 상담·상품 이용으로 연결"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "사용자 인터뷰와 이용 데이터로 핵심 수요 확인",
            "보험 확인·분석 기능에 쉽게 접근하는 정보 구조 설계",
            "관리 기능과 보험 혜택·상담을 연결하는 화면 기획",
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
      "role": "제품 총괄 및 실험·서비스 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 2명 · 데이터 분석 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-image2.png",
          "label": "관리 중심 보험 홈 개편으로 이탈 22% 감소",
          "wide": false,
          "width": 811,
          "height": 1085
        },
        {
          "src": "assets/claude-image3.png",
          "label": "관리 중심 보험 홈 개편으로 이탈 22% 감소",
          "wide": false,
          "width": 1237,
          "height": 1035
        },
        {
          "src": "assets/claude-image4.png",
          "label": "관리 중심 보험 홈 개편으로 이탈 22% 감소",
          "wide": true,
          "width": 2189,
          "height": 1713
        }
      ],
      "galleryColumns": 2
    },
    {
      "id": "case-14",
      "page": 14,
      "company": "toss",
      "title": "퍼널 병목 개선으로 대출 전환율 8배·매출 28배",
      "image": "assets/evidence-hd-14.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "대출 진입부터 최종 실행까지 단계별 사용자 이탈 발생",
            "이탈 원인에 맞춘 제품 개선과 전환율 검증 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "단계별 퍼널과 신청·실행 결과 데이터를 분석",
            "정기 사용자 인터뷰로 불편과 미충족 수요 발굴",
            "가설을 검증할 실험 과제와 사용자 요구사항 정의",
            "사용자 흐름을 설계하고 결과에 따라 개선 반복"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "서비스 진입 대비 최종 전환율 8배 개선",
            "매출 28배 증가"
          ]
        }
      ],
      "role": "제품 총괄 및 실험·서비스 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-fig_toss_funnel.png",
          "label": "퍼널 병목 개선으로 대출 전환율 8배·매출 28배",
          "wide": true,
          "width": 2000,
          "height": 900
        },
        {
          "src": "assets/claude-s9_orig0.jpg",
          "label": "퍼널 병목 개선으로 대출 전환율 8배·매출 28배",
          "wide": false,
          "width": 1023,
          "height": 586
        },
        {
          "src": "assets/claude-s9_orig1.jpeg",
          "label": "퍼널 병목 개선으로 대출 전환율 8배·매출 28배",
          "wide": false,
          "width": 960,
          "height": 415
        }
      ],
      "galleryColumns": 2
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
            "금융사별 정책·연동 차이로 대출 신청 이후 실행 장벽 발생",
            "제휴 상품 확대와 연동 기준 표준화 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "금융사 연동을 위한 표준 API 설계",
            "제휴사의 운영·개발 담당자와 정책 및 이슈 협의",
            "제품 QA와 실제 환경 테스트 진행",
            "제휴사별 연동 일정·개발 리소스 조율"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "금융사 약 22곳 연동",
            "대출 신청 대비 실행률 6배 개선",
            "제휴 상품과 대출 선택지 확대"
          ]
        }
      ],
      "role": "제품 총괄 및 실험·서비스 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-fig_toss_partner.png",
          "label": "금융사 22곳 연동으로 대출 실행률 6배 개선",
          "wide": true,
          "width": 2000,
          "height": 980
        },
        {
          "src": "assets/claude-s10_orig0.png",
          "label": "금융사 22곳 연동으로 대출 실행률 6배 개선",
          "wide": false,
          "width": 1747,
          "height": 837
        },
        {
          "src": "assets/claude-s10_orig1.jpg",
          "label": "금융사 22곳 연동으로 대출 실행률 6배 개선",
          "wide": false,
          "width": 789,
          "height": 671
        }
      ],
      "galleryColumns": 2
    },
    {
      "id": "case-17",
      "page": 17,
      "company": "toss",
      "title": "주택담보대출 갈아타기 출시, 플랫폼 중 최고 실행액",
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
            "정부·제휴사 요구사항을 제품 정책에 반영",
            "사용자 인터뷰로 갈아타기 과정의 불편 파악",
            "서비스 흐름과 상세 기능 설계",
            "디자인·개발·제휴사와 출시 및 운영 협업"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "금융 플랫폼 중 가장 높은 대출 실행액·전환율 달성",
            "비교부터 신청까지 이어지는 사용자 경험 구현",
            "출시 후 실행액과 전환 지표 중심으로 제품 개선"
          ]
        }
      ],
      "role": "제품 총괄 및 실험·서비스 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-image11.png",
          "label": "주택담보대출 갈아타기 출시, 플랫폼 중 최고 실행액",
          "wide": false,
          "width": 1080,
          "height": 2116
        },
        {
          "src": "assets/claude-image12.png",
          "label": "주택담보대출 갈아타기 출시, 플랫폼 중 최고 실행액",
          "wide": false,
          "width": 409,
          "height": 766
        }
      ],
      "galleryColumns": 2
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
            "주택담보대출의 낮은 온라인 이용 비중과 대출 모집인 중심의 오프라인 유통 구조에서 온라인 비교·중개 서비스 기회를 발견"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "시장 지표와 대출 상담·모집 구조 분석",
            "재위탁 규제 쟁점을 검토하고 규제특례 신청 추진",
            "서비스 모델과 소비자 편익을 신청서로 구체화",
            "법무·대관·금융소비자보호 담당자와 심사 대응"
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
      "role": "제품 총괄 및 서비스 모델·신청서 작성",
      "contribution": "100%",
      "team": "법무 1명 · 대관 1명 · 금융소비자보호 1명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-fig_toss_sandbox.png",
          "label": "규제 샌드박스로 6개월 만에 혁신금융서비스 지정",
          "wide": true,
          "width": 2000,
          "height": 890
        },
        {
          "src": "assets/claude-s13_orig0.png",
          "label": "규제 샌드박스로 6개월 만에 혁신금융서비스 지정",
          "wide": false,
          "width": 837,
          "height": 381
        },
        {
          "src": "assets/claude-s13_orig1.jpeg",
          "label": "규제 샌드박스로 6개월 만에 혁신금융서비스 지정",
          "wide": false,
          "width": 611,
          "height": 470
        },
        {
          "src": "assets/claude-s13_orig2.jpeg",
          "label": "규제 샌드박스로 6개월 만에 혁신금융서비스 지정",
          "wide": false,
          "width": 599,
          "height": 465
        }
      ],
      "galleryColumns": 3
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
            "주택 검색 단계에서 사용자 28%가 이탈. 이탈 사용자 중 72%가 KB시세가 없는 신축 아파트를 검색한 사실을 확인"
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
            "기존에 수용하지 못한 신축 주택 수요 확보",
            "신규 매출원 발굴"
          ]
        }
      ],
      "role": "제품 총괄 및 실험·서비스 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-image16.jpg",
          "label": "주택 검색 이탈 원인 분석으로 전환율 11%p 상승",
          "wide": true,
          "width": 825,
          "height": 836
        }
      ],
      "galleryColumns": 1
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
            "전체 매출에서 후순위 제휴사 비중 최대 28%",
            "기존 한도로 충족하지 못한 자금 수요에 대응"
          ]
        }
      ],
      "role": "제품 총괄 및 실험·서비스 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-image17.png",
          "label": "후순위 대출 제휴로 전체 매출의 최대 28% 창출",
          "wide": false,
          "width": 316,
          "height": 647
        }
      ],
      "galleryColumns": 1
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
            "제휴 상품의 금리가 낮아졌지만 사용자가 경쟁력을 체감하지 못해 전환이 기대에 못 미침. 시장 금리와 비교하면 선택을 도울 수 있다고 판단"
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
            "최종 전환율 22% 상승",
            "상품 선택에 필요한 금리 비교 맥락 제공"
          ]
        }
      ],
      "role": "제품 총괄 및 실험·서비스 기획",
      "contribution": "100%",
      "team": "디자인 1명 · 개발 5명 · 분석 1명 · 사업개발 3명",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-image18.png",
          "label": "시장 금리 비교 정보로 최종 전환율 22% 상승",
          "wide": true,
          "width": 1021,
          "height": 970
        }
      ],
      "galleryColumns": 1
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
      "contribution": "용어·정보 안내 개선안 및 실험 설계",
      "team": "",
      "caption": null,
      "galleryColumns": 3,
      "originals": [
        {
          "src": "assets/financial-term-image21.png",
          "label": "대출 목적 용어 개선",
          "width": 838,
          "height": 739
        },
        {
          "src": "assets/financial-term-image19.png",
          "label": "금융사 정보 안내",
          "width": 1080,
          "height": 2116
        },
        {
          "src": "assets/financial-term-image20.png",
          "label": "생활자금 대출 목적 안내",
          "width": 1080,
          "height": 2116
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
            "광고 거래에 참여하는 매체와 광고주 네트워크를 확대하고, 파트너 연동부터 운영·정산까지 안정적으로 관리할 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "국내외 SSP·DSP에 제휴 제안 및 계약 협의",
            "파트너 계약서와 기술 검토 자료 작성",
            "연동 후 양사 데이터를 비교하고 정산 금액 검토",
            "성과를 모니터링하며 매체 비용·클릭률 이슈 대응"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "매체 측 플랫폼(SSP) 16곳 연동",
            "광고주 측 플랫폼(DSP) 15곳 파트너십·연동",
            "신규 광고 거래와 매출 기회 확대"
          ]
        }
      ],
      "role": "파트너 제휴·연동·운영 기획",
      "contribution": "100%",
      "team": "단독 (국내외 파트너사 직접 커뮤니케이션)",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-fig_nhn_adx.png",
          "label": "국내외 광고 플랫폼 31곳 연동으로 거래 네트워크 확대",
          "wide": true,
          "width": 2000,
          "height": 820
        },
        {
          "src": "assets/claude-s19_orig0.jpg",
          "label": "국내외 광고 플랫폼 31곳 연동으로 거래 네트워크 확대",
          "wide": false,
          "width": 828,
          "height": 574
        },
        {
          "src": "assets/claude-s19_orig1.jpg",
          "label": "국내외 광고 플랫폼 31곳 연동으로 거래 네트워크 확대",
          "wide": false,
          "width": 822,
          "height": 665
        }
      ],
      "galleryColumns": 2
    },
    {
      "id": "case-24",
      "page": 24,
      "company": "nhn",
      "title": "부정 매체 관리로 연 1.2억 원 비용 절감",
      "image": "assets/evidence-hd-24.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "부정 트래픽과 비효율적인 매체 비용을 줄이고, 광고 거래 지표를 개선하며 브라우저·모바일 플랫폼 정책 변화에 대응"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "내부 정책을 위반한 부정·어뷰징 매체 탐지 및 관리",
            "클릭률·트래픽·노출 지표를 점검하고 이슈 대응",
            "eCPM 기준값을 조정하며 수익 효율 검토",
            "SameSite·SKAN 정책 검토 및 SDK 업데이트 안내"
          ]
        },
        {
          "title": "결과/성과",
          "items": [
            "부정 매체 적발로 연 1.2억 원 비용 절감",
            "CPM 기준값 조정으로 앱 매체 월 매출 최대 30% 증가"
          ]
        }
      ],
      "role": "광고 플랫폼 운영 및 정책 대응 기획",
      "contribution": "100%",
      "team": "단독 (매체 이슈 · 수익 지표 직접 관리)",
      "caption": null,
      "originals": [
        {
          "src": "assets/claude-fig_nhn_fraud.png",
          "label": "부정 매체 관리로 연 1.2억 원 비용 절감",
          "wide": true,
          "width": 2000,
          "height": 750
        },
        {
          "src": "assets/claude-s20_orig0.png",
          "label": "부정 매체 관리로 연 1.2억 원 비용 절감",
          "wide": false,
          "width": 1530,
          "height": 849
        }
      ],
      "galleryColumns": 2
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
            "엑셀 기반 캠페인 지표 수기 관리의 비효율 확인",
            "성과 파악과 문제 대응 시간 단축 필요",
            "주요 지표를 통합 조회하는 운영 화면 기획"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "영업·사업 부서의 요구사항과 필요한 지표 정리",
            "화면 설계서 및 어드민 스토리보드 작성",
            "지표별 데이터 소스와 연결 방식 정의",
            "디자인·개발 담당자와 운영 센터 구축"
          ]
        },
        {
          "title": "결과",
          "items": [
            "캠페인 성과와 운영 지표를 통합 조회하는 모니터링 화면 구축"
          ]
        }
      ],
      "role": "어드민 기획·지표·데이터 정의",
      "contribution": "100%",
      "team": "서버 2명 · 프론트 1명 · 디자인 1명",
      "caption": null
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
            "쇼핑몰별로 분산된 검색·비교 행동의 타기팅 활용 한계",
            "검색 키워드와 구매 관심사 연결의 사업성 검증 필요",
            "구매 의도를 반영한 신규 광고 상품 확보 필요"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "커머스 키워드와 웹 로그의 매칭률로 사업성 검토",
            "키워드 매핑·적재·정제·전달의 처리 정책 수립",
            "A/B 테스트로 광고 효율 검증",
            "데이터 제공 단가와 상품 운영 정책 수립"
          ]
        },
        {
          "title": "결과",
          "items": [
            "검색 키워드 기반 타기팅 광고 상품 출시",
            "광고 효율 개선과 데이터 상품 매출 확대"
          ]
        }
      ],
      "role": "서비스·데이터 정책 기획",
      "contribution": "70%",
      "team": "기획 2명 · 분석 1명 · 데이터 엔지니어 3명",
      "caption": null
    },
    {
      "id": "case-27",
      "page": 27,
      "company": "nhn",
      "title": "외부 광고 수요 연동과 실시간 입찰 확대",
      "image": "assets/evidence-hd-27.png?v=20260922-results",
      "sections": [
        {
          "title": "문제 의식 및 목표",
          "items": [
            "외부 SSP 트래픽의 내부 DSP 한정 연결 구조",
            "외부 DSP의 입찰 참여와 거래 범위 확대 필요",
            "광고 거래 구조 개선을 통한 신규 수요 확보"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "구조 변경에 따른 매출 시뮬레이션",
            "내부·외부 플랫폼 간 거래 프로세스와 용어 정의",
            "입찰 시나리오 및 최저 입찰가·낙찰 정책 설계",
            "테스트와 실제 서비스 적용 진행"
          ]
        },
        {
          "title": "결과",
          "items": [
            "외부 DSP가 참여하는 실시간 입찰 구조 적용",
            "신규 광고 수요 연동에 따른 매출 증가"
          ]
        }
      ],
      "role": "거래 구조·프로세스·정책 기획",
      "contribution": "70%",
      "team": "기획 2명 · 서버 4명 · 프론트 2명 · 디자인 1명",
      "caption": null
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
      "caption": null
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
            "광고주가 인플루언서에게 가격을 개별 문의하고 선입금해야 하는 불편을 확인. 거래와 성과 확인을 지원하는 광고 오픈마켓 기획"
          ]
        },
        {
          "title": "주요 업무",
          "items": [
            "광고주 약 100명을 만나 수요와 시장성 검증",
            "요구사항을 반영한 웹 서비스 설계·구축",
            "광고 거래·에스크로·성과 리포트 기능 기획",
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
      "role": "창업자·대표로 서비스 기획·출시·운영 총괄",
      "contribution": "100%",
      "team": "기획 1명 · 디자인 1명 · 풀스택 개발 3명",
      "caption": null
    }
  ]
};

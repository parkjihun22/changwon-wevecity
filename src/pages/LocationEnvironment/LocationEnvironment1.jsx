import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
	{ img: section2Image1, titleText: "확정된 개발호재로<br />창원을 더 새롭게 살수록 높아지는 미래가치", contentText: "가덕도 신공항 예정 <br />진해신항 계획 등 <br /> 더 가깝게 만나는 비전과 프리미엄" },
	{ img: section2Image2, titleText: "남다른 혁신설계", contentText: "선호도 높은 중·대형 평면 설계 및 다양하고 넉넉한 수납공간 <br /> 조성 등와이드하고 스마트하게 누리는공간" },
	{ img: section2Image3, titleText: "마산·창원·진해를 더 빠르게<br />광역으로 통하는 특급 교통", contentText: "진해산업로, 진해대로<br />남해고속도로 등 <br /> 부산을 빠르게 잇는 광역교통" },
	{ img: section2Image4, titleText: "학교를 더 가깝게 한걸음에<br /> 안심학세권 프리미엄", contentText: "단지 바로 앞 처인초,중교 · 처인고교 <br />학원가 조성등 도보거리에 누리는 <br /> 원스톱 안심교육환경" },
	{ img: section2Image5, titleText: "압도적인 브랜드 프리미엄<br />1군브랜드 ", contentText: "GS건설 , 두산위브와 함께하는<br /> 압도적인 브랜드 프리미엄" },
	{ img: section2Image6, titleText: "편리한 생활중심<br />", contentText: "도보거리에 <br />홈플러스, 롯데마트, 연세에스 병원 등<br />풍부한 인프라로 편리한 생활" },
]

const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>창원 자이위브 - 입지안내</title>
        <meta
          name="description"
          content="창원 자이위브의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 평택의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다"
        />
        <meta
          name="keywords"
          content="창원 자이위브, 창원 메가시티 자이위브, 창원 자이위브모델하우스"
        />
        <link
          rel="canonical"
          href="https://www.alwatanyh.com/LocationEnvironment/intro"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="창원 자이위브 - 입지안내"
        />
        <meta
          property="og:description"
          content="창원 자이위브의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 평택의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다"
        />
        <meta
          property="og:image"
          content="https://www.alwatanyh.com/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.alwatanyh.com/LocationEnvironment/intro"
        />
        <meta property="og:site_name" content="창원 자이위브" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="창원 자이위브 - 입지안내"
        />
        <meta
          name="twitter:description"
          content="창원 자이위브의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 평택의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다"
        />
        <meta
          name="twitter:image"
          content="https://www.alwatanyh.com/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.alwatanyh.com/LocationEnvironment/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`	{		"@context": "https://schema.org",		"@type": "WebPage",		"name": "창원 자이위브 - 입지안내",		"description": "창원 자이위브의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 평택의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다",		"url": "https://www.alwatanyh.com/LocationEnvironment/intro"	}	`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        창원 자이위브 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        창원 자이위브의 입지 정보를 확인하세요. 뛰어난 교통망, 생활
        인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 평택의
        중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
      </p>

      <div className={styles.textBox}>
        <div>살수록 높아질 창원 자이위브</div>
        <div>도시를 압도할 자부심 창원 자이위브</div>
      </div>

      <img src={page1} className={styles.image2} alt="창원 자이위브-image1" />

   
      <div className={styles.section2}>
				{LocationSection.map((value, idx) => (
					<LocationSectionBox
						image={value.img}
						title={value.titleText}
						text={value.contentText}
					/>
				))}
			</div>

      {/* <div className={styles.commonBox}>
				
				<div className={styles.notice}>
					※아주대학교 평택병원 및 카이스트 평택캠퍼스 관련 내용은 '평택시청' 2024년 주요업무계획을 참고하였습니다
				</div>
				<div className={styles.notice}>
					※평택동부고속화도로 관련 내용은 '평택시 고지 제 2023-407호'를 참고하였습니다
				</div>
				<div className={styles.notice}>
					※KTX 수원발 관련 내용은 '국토교통부 고시 제'2023-598호'를 참고하였습니다
				</div>
				<div className={styles.notice}>
					※GTX A·C 관련 내용은 '국토굥통부 2024년 1월 25일 보도자료 별첨 교통분야 3대 혁신 전략'을 참고하였습니다
				</div>
				<div className={styles.notice}>
					※신설도로  관련내용은 '경기도 평택시 고시 제2023-316호'를 참고하였습니다
				</div>
				<div className={styles.notice}>
					※본 홍보물의 위치도는 소비자의 이해를 돕기 위해 제작된 것으로, 실제와 차이가 날 수 있습니다
				</div>
				<div className={styles.notice}>
					※치도 등 상기 개발 및 료통 배정 등의 계획에 대한 사항은 추후 관계 기관의 사정에 따라 변경 및 취소될 수 있으며 이는 당사와 무관함을 알려드립니다

				</div>
				<div className={styles.notice}>
					※상기 이미지와 내용의 각종 시설(학교,도로망 등)은 지구단위계획의 변경, 허가관청 및 국가시책에 따라 변경될 수 있습니다.
				</div>
	
			</div> */}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;

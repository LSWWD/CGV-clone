CGV Clone
=====
### 기획의도
> 수업에서 배운 내용을 통해 다양한 화면 구성을 구현해 볼 필요성을 느끼고, 수업에서 배운   
> 내용들을 숙지할 필요성도 느껴 다양한 화면구성이 있는 기존에 만들어진 웹사이트를 구현   
> 해 보고자 기획하게 되었습니다.

### 프로젝트 진행 과정


1. 레이아웃 작성
	> 프로젝트를 효과적으로 진행하기 위해 저희는 사이트를 기능별로 구분하여 작업할 필요성을   
	> 느껴 박스 형태로 기능을 구분하여 우선 모델링을 하고 각자의 파트를 정했습니다.
2. 구현 목표 설정
	> 기능별로 구분하였다고 하더라도 웹사이트에는 시각적으로 구현 할 많은 요소들이 있습니다.   
	> 따라서 저희는 각 파트 안에서도 구현 할 목표를 명확히 해야 했습니다.
3. 문제점 파악
	> 각자의 역량에 따라 제한된 시간안에는 구현하기 힘든 기능들이 생길 수 있기때문에 저희는   
	> 구현에 문제점이 생긴다면 적극적으로 피드백을 하고 서로 의견을 교환해 해당 구현 목표에   
	> 우선순위를 높게 두기보다 전체적인 아웃라인을 우선적으로 완성하는 것에 초점을 두었습니다.
4. 달성률 확인
	> 저희는 깃허브를 통해 각자의 브랜치를 확인하며 프로젝트의 진행상황을 실시간으로 파악 해   
	> 프로젝트의 완성도와 구현목표들의 달성률을 평가 할 수 있었습니다.
5. 결과 확인
	> 프로젝트 발표 이틀 전에 각자의 코딩을 중단하고 그 동안 진행 했던 것들을 병합하여 하나의   
	> 결과물로 구현하여 전체적인 리뷰를 통해 구현에 미흡한 부분을 확인하고 보완할 방법들을 논의 했습니다.

### 1. 레이 아웃 작성
- 준비물   
[CGV 홈페이지](https://cgv.co.kr/), [Page Ruler Redux](https://chrome.google.com/webstore/detail/page-ruler-redux/giejhjebcalaheckengmchjekofhhmal?hl=ko), HTML, CSS, [Oven](https://ovenapp.io)
 - 과정
	> 1. cgv 홈페이지에 접속
	> 2. page ruler redux를 이용해 각 부분별 크기 측정
	> 3. 부분별로 이름을 지정해 클래스 네임 생성
	> 4. oven이나 css를 이용해 각 부분들의 구성요소 확인

- 이유
	> 최외곽 클래스이름을 지정하고 구성요소를 구분함으로써 병합 시 충돌 최소화
- 결과물   
[레이아웃](https://cottony-property-595.notion.site/8314531d329b492793d0197f28a05c26), layout폴더

### 2. 구현 목표 설정
#### Header & Menu(=Nav)
	- 메뉴에 커서를 올려 놓을 경우 전체 메뉴가 활성화 될 것
	- 각자의 요소가 원래 페이지와 비슷한 위치에 있을 것
	- 스크롤을 내려도 메뉴창은 유지되도록 할 것
	- 스크롤을 내릴때 유지되는 메뉴창에도 마우스를 올려놓으면 전체메뉴가 활성화
	- 약간의 개성을 표현하기
#### Main Screen(Screen)
	- 홈페이지와 같이 영상 좌우에 그라데이션 넣기
	- 플레이 버튼과 정지버튼이 영상의 상황에 맞게 변화할 것
	- 정지버튼을 클릭 시 영상을 멈추게 하기
	- 플레이 버튼 클릭 시 영상을 멈춘부분에서 다시 시작하도록 하기
	- 음소거 버튼으로 영상 소리를 제거하기
	- 소리 버튼으로 영상 소리를 다시 복원하기
#### Movie chart
	- 좌우 버튼 클릭 시 다섯개 포스터가 하나처럼이동
	- 첫 번째 화면은 좌측 버튼 사라짐
	- 마지막 화면은 우측 버튼 사라짐
	- 포스터에 마우스를 올려놓으면 상세보기와 예매하기 활성화
	- 무비차트와 상영예정작의 페이지가 독립적이어야 함
		> ex) 무비차트에서 화면을 이동하더라도 상영예정작에서는 변화가 없어야 함
#### Event
	
	- 좌우버튼 클릭 시 세 개의 포스터가 하나처럼 이동
	- 페이지를 불러오면 자동으로 이동할 것
	- 정지버튼을 누르면 자동이동이 비활성화 될 것
	- 자동이동의 상태에 따라 정지버튼과 재생버튼이 맞게 활성화 될 것
	- 자동이동이 활성화 되었을 때 좌우버튼 클릭 시 정확한 화면이동을 할 것
	- 첫 번째 화면은 좌측버튼사라짐
	- 마지막 화면은 우측버튼 사라짐
	- 자동이동이 활성화 되었을 때 첫 화면이면 좌측버튼 사라짐
	- 자동이동이 활성화 되었을 때 마지막 화면이면 우측버튼 사라짐
	
	#### Special Cinema
	- 각자의 요소가 원래 페이지와 똑같은 위치에 있을 것
	- 오른쪽 텍스트에 커서를 올려 놓으면 각 부분마다 왼쪽에 다른 그림이 나오도록 구성


#### Goods
	- 각자의 요소가 원래 페이지와 똑같은 위치에 있을 것
	- 각 상품에 커서를 올리면 커서가 포인터로 변해야 한다.

#### Notice

	- 각자의 요소가 원래 페이지와 똑같은 위치에 있을 것
	- 오른쪽 사진이 번갈아가면 계속 변할 것
	- 정지 버튼을 누르면 변화가 멈추어야 함
	- 사진의 상태에 따라 버튼이 변화할 것
	- 플레이 버튼을 누르면 변화가 다시 시작되어야 함

#### Footer
	- 각자의 요소가 원래 페이지와 똑같은 위치에 있을 것
	- 계열사 바로가기 클릭 시 계열사 목록이 보일 것

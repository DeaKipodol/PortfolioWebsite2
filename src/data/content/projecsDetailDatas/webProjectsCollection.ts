import { ProjectDetailT } from '../../../types/type';

export const webProjectsCollection: ProjectDetailT = {
  name: 'web-projects-collection',
  title: '웹 프로젝트 모음',
  subject: 'HTML, CSS, JavaScript를 활용한 다양한 웹 프로젝트 모음입니다.',
  tag: ['HTML', 'CSS', 'JavaScript'],
  depoloyurl: 'https://ubiquitous-meringue-86ef8a.netlify.app/',
  detail: {
    overview: 'HTML, CSS, JavaScript를 활용한 다양한 웹 프로젝트 모음입니다. 가위바위보 게임, 달력 생성기, 디지털 시계, 계산기 등 다양한 프로젝트를 포함하고 있습니다.',
    features: [
      '가위바위보 게임: 사용자와 컴퓨터가 가위바위보를 하는 간단한 게임',
      '달력 생성기: 연도와 월을 입력하면 해당 월의 달력을 생성',
      '디지털 시계: 실시간으로 현재 시간을 표시하는 디지털 시계',
      '계산기: 기본적인 사칙연산이 가능한 계산기'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    challenges: [
      '다양한 프로젝트의 일관된 디자인 시스템 구축',
      '반응형 웹 디자인 구현',
      '사용자 경험 최적화'
    ],
    solutions: [
      '공통 컴포넌트 설계 및 재사용',
      '미디어 쿼리를 활용한 반응형 레이아웃 구현',
      '사용자 피드백을 통한 지속적인 개선'
    ]
  }
}; 
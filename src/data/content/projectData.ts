import { project6 } from './projecsDetailDatas/project6';
import { project7 } from './projecsDetailDatas/project7';
import { project9 } from './projecsDetailDatas/project9';
import { webProjectsCollection } from './projecsDetailDatas/webProjectsCollection';
import { hallaUniversityTour } from './projecsDetailDatas/hallaUniversityTour';

export const projectData = [
  {
    name: webProjectsCollection.name,
    type: 'single',
    title: webProjectsCollection.title,
    subject: webProjectsCollection.subject,
    tag: webProjectsCollection.tag,
    depoloyurl: webProjectsCollection.depoloyurl,
  },
  {
    name: hallaUniversityTour.name,
    type: 'single',
    title: hallaUniversityTour.title,
    subject: hallaUniversityTour.subject,
    tag: hallaUniversityTour.tag,
    depoloyurl: hallaUniversityTour.depoloyurl,
  },
  {
    name: project9.name,
    type: 'single',
    title: project9.title,
    subject: '자영업자들이 정부 지원 및 정책적 혜택 정보를 효과적으로 공유할 수 있도록 돕는 모바일 앱 개발을 주도했습니다.',
    tag: project9.tag,
    giturl: project9.giturl,
  },
  {
    name: project7.name,
    type: 'single',
    title: project7.title,
    subject: '반려견 건강지킴이: 스마트 헬스케어 앱입니다.',
    tag: project7.tag,
    giturl: project7.giturl,
  },
  {
    name: project6.name,
    type: 'single',
    title: project6.title,
    subject: '개인화된 인공지능 시스템 개발.',
    tag: project6.tag,
    giturl: project6.giturl,
  }
];

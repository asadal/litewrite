module.exports = {
  emptyDoc: '새 글을 작성하세요 …',
  search: '검색',
  footer: 'Life is long. Run.',
  delete: '삭제',
  confirmDelete: '문서를 삭제하시겠습니까?',
  share: '공유',
  unshare: '공유 해제',
  open: '열기',
  modified: '수정',
  updateCache: '새 버전이 업데이트됐습니다. 새로고침 하시겠습니까?',
  welcome: require('./welcome-ko.txt'),
  secondsAgo: function (x) {
    if (x === 1) return 'a second ago'
    return x + ' 초 전'
  },
  minutesAgo: function (x) {
    if (x === 1) return 'a minute ago'
    return x + ' 분 전'
  },
  hoursAgo: function (x) {
    if (x === 1) return 'an hour ago'
    return x + ' 시간 전'
  },
  daysAgo: function (x) {
    if (x === 1) return 'a day ago'
    return x + ' 일 전'
  },
  weeksAgo: function (x) {
    if (x === 1) return 'a week ago'
    return x + ' 주 전'
  },
  monthsAgo: function (x) {
    if (x === 1) return 'a month ago'
    return x + ' 개월 전'
  },
  yearsAgo: function (x) {
    if (x === 1) return 'a year ago'
    return x + ' 년 전'
  }
}
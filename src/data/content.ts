export const profile = {
  name: 'Hà Thái Sơn',
  shortName: 'TS',
  greeting: "Xin chào, tôi là",
  roles: ['Video Editor', 'Colorist', 'Visual Storyteller'],
  tagline:
    'Tôi kể những câu chuyện bằng hình ảnh, biến những đoạn phim thô thành các video điện ảnh và trải nghiệm hình ảnh mãn nhãn.',
  aboutShort:
    'Đam mê sáng tạo và nghệ thuật hình ảnh. Tôi thích biến những ý tưởng thành những thước phim thực tế và đáng nhớ.',
  aboutLong:
    "Tôi là một Video Editor tại Việt Nam. Trong những năm qua, tôi đã tham gia dựng nhiều thể loại video từ du lịch, sự kiện đến video thương hiệu đậm chất điện ảnh. Tôi chú trọng vào lối kể chuyện mạch lạc, nhịp độ cắt cảnh mượt mà và nghệ thuật chỉnh màu để làm cho khán giả thực sự cảm nhận được thông điệp qua từng khung hình.",
  aboutIntro:
    "Tôi là Nguyễn Thái Sơn, một Video Editor đam mê sáng tạo nội dung, kể những câu chuyện qua video và mang lại cảm xúc cho người xem.",
  quote:
    'Mỗi khung hình tôi dựng, mỗi dải màu tôi chỉnh đều là một bước tiến gần hơn tới việc tạo ra một tác phẩm nghệ thuật.',
  email: 'hason.ls.it@gmail.com',
  location: 'Hà Nội, Việt Nam',
  phone: '098 4614 762',
  cvUrl: '#',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
  },
}

export const navLinks = [
  { id: 'home', label: 'Trang chủ', icon: 'home' },
  { id: 'about', label: 'Giới thiệu', icon: 'user' },
  { id: 'skills', label: 'Kỹ năng', icon: 'box' },
  { id: 'videos', label: 'Video', icon: 'play' },
  { id: 'contact', label: 'Liên hệ', icon: 'mail' },
] as const

export const whatIDo = [
  {
    icon: 'clapperboard',
    title: 'Video Editing',
    description: 'Premiere Pro, Cắt dựng nhịp nhàng, Storytelling',
  },
  {
    icon: 'aperture',
    title: 'Color Grading',
    description: 'Davinci Resolve, Chỉnh màu điện ảnh, Look creation',
  },
  {
    icon: 'film',
    title: 'Motion Graphics',
    description: 'After Effects, Hiệu ứng chữ, Hoạt ảnh 2D',
  },
  {
    icon: 'mic',
    title: 'Sound Design',
    description: 'Audition, Lồng tiếng, Thiết kế âm thanh',
  },
]

export const stats = [
  { icon: 'clapperboard', value: '2+', label: 'Năm kinh nghiệm' },
  { icon: 'play-circle', value: '50+', label: 'Video đã dựng' },
  { icon: 'film', value: '10+', label: 'Dự án thương hiệu' },
  { icon: 'users', value: '100%', label: 'Khách hàng hài lòng' },
]

export const journey = [
  {
    year: '2022',
    title: 'Bắt đầu hành trình',
    description: 'Tiếp xúc với các phần mềm dựng phim cơ bản và đam mê nghệ thuật kể chuyện bằng hình ảnh.',
  },
  {
    year: '2023',
    title: 'Phát triển Kỹ năng',
    description: 'Nghiên cứu sâu về Premiere Pro và After Effects, thực hiện các dự án video du lịch và sự kiện nhỏ.',
  },
  {
    year: '2024',
    title: 'Nâng tầm Điện ảnh',
    description: 'Tập trung vào Color Grading và Sound Design, mang đến chất lượng điện ảnh cho các video thương hiệu.',
  },
  {
    year: 'Hiện tại',
    title: 'Sáng tạo không ngừng',
    description: 'Tiếp tục học hỏi, sáng tạo và mang lại giá trị cảm xúc qua những thước phim chuyên nghiệp.',
  },
]

export const whatIDoTabs = [
  {
    id: 'video-editing',
    label: 'Dựng Video',
    tools: [
      { name: 'Premiere Pro', icon: 'premiere', color: 'text-purple-400', bg: 'bg-purple-400/10' },
      { name: 'CapCut', icon: 'capcut', color: 'text-slate-200', bg: 'bg-slate-400/10' },
      { name: 'Storytelling', icon: 'story', color: 'text-violet-400', bg: 'bg-violet-400/10' },
      { name: 'Hiệu ứng chuyển cảnh', icon: 'transition', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    ],
  },
  {
    id: 'color-grading',
    label: 'Chỉnh màu',
    tools: [
      { name: 'DaVinci Resolve', icon: 'davinci', color: 'text-rose-400', bg: 'bg-rose-400/10' },
      { name: 'Lumetri Color', icon: 'color', color: 'text-amber-400', bg: 'bg-amber-400/10' },
      { name: 'Color Matching', icon: 'palette', color: 'text-orange-400', bg: 'bg-orange-400/10' },
    ],
  },
  {
    id: 'motion-sound',
    label: 'Kỹ xảo & Âm thanh',
    tools: [
      { name: 'After Effects', icon: 'aftereffects', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
      { name: 'Motion Graphics', icon: 'animation', color: 'text-pink-400', bg: 'bg-pink-400/10' },
      { name: 'Audition', icon: 'audio', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
      { name: 'Sound Design', icon: 'sound', color: 'text-teal-400', bg: 'bg-teal-400/10' },
    ],
  },
]

export const traits = [
  {
    icon: 'clapperboard',
    title: 'Kể chuyện bằng hình ảnh',
    description: 'Mỗi video là một câu chuyện. Tôi tập trung vào cảm xúc và thông điệp.',
  },
  {
    icon: 'aperture',
    title: 'Màu sắc điện ảnh',
    description: 'Đảm bảo mỗi khung hình đều có chiều sâu và màu sắc phù hợp với tâm trạng.',
  },
  {
    icon: 'mic',
    title: 'Âm thanh sống động',
    description: 'Âm thanh chiếm 50% trải nghiệm xem. Tôi luôn chú trọng thiết kế âm thanh.',
  },
  {
    icon: 'users',
    title: 'Làm việc chuyên nghiệp',
    description: 'Giao sản phẩm đúng hạn, lắng nghe phản hồi và luôn cải thiện chất lượng.',
  },
]

export const skillGroups = [
  {
    title: 'Công cụ Dựng Video',
    skills: [
      { name: 'Premiere Pro', level: 95 },
      { name: 'CapCut PC', level: 90 },
      { name: 'DaVinci Resolve', level: 75 },
    ],
  },
  {
    title: 'Kỹ xảo & Hoạt ảnh',
    skills: [
      { name: 'After Effects', level: 85 },
      { name: 'Motion Graphics', level: 80 },
      { name: 'Typography', level: 85 },
    ],
  },
  {
    title: 'Kỹ năng Chuyên môn',
    skills: [
      { name: 'Chỉnh màu (Color Grading)', level: 85 },
      { name: 'Thiết kế âm thanh (Sound Design)', level: 80 },
      { name: 'Kể chuyện (Storytelling)', level: 90 },
    ],
  },
]

export const videos = []

export const projects = []
export const mcEvents = []
export const blogPosts = []

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
    "Tôi là một Video Editor và Content Creator tại Việt Nam. Không chỉ đảm nhận vai trò hậu kỳ, tôi còn có khả năng tự lên ý tưởng, viết kịch bản và trực tiếp quay dựng video. Trong quá trình làm việc, tôi chủ yếu sử dụng CapCut để edit các video với nhịp độ cuốn hút và kết hợp với Canva để thiết kế các ấn phẩm hình ảnh đẹp mắt.",
  aboutIntro:
    "Tôi là Hà Thái Sơn, một người đam mê sáng tạo nội dung, lên kịch bản, quay phim và dựng video để mang lại cảm xúc cho người xem.",
  quote:
    'Mỗi khung hình tôi dựng, mỗi dải màu tôi chỉnh đều là một bước tiến gần hơn tới việc tạo ra một tác phẩm nghệ thuật.',
  email: 'hason.ls.it@gmail.com',
  location: 'Hà Nội, Việt Nam',
  phone: '098 4614 762',
  cvUrl: '#',
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
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
    title: 'Kịch bản & Quay dựng',
    description: 'Lên ý tưởng, viết kịch bản chi tiết và trực tiếp quay dựng video',
  },
  {
    icon: 'film',
    title: 'Video Editing',
    description: 'Cắt dựng nhịp nhàng, thêm hiệu ứng bắt mắt với CapCut',
  },
  {
    icon: 'aperture',
    title: 'Thiết kế Hình ảnh',
    description: 'Thiết kế thumbnail, banner và ấn phẩm truyền thông bằng Canva',
  },
  {
    icon: 'mic',
    title: 'Âm thanh & Voice',
    description: 'Thu âm, lồng tiếng và lựa chọn âm nhạc phù hợp với mạch cảm xúc',
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
      { name: 'CapCut', icon: 'capcut', color: 'text-slate-200', bg: 'bg-slate-400/10' },
      { name: 'Premiere Pro', icon: 'premiere', color: 'text-purple-400', bg: 'bg-purple-400/10' },
      { name: 'Hiệu ứng chuyển cảnh', icon: 'transition', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
      { name: 'Tìm nhạc (BGM)', icon: 'audio', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    ],
  },
  {
    id: 'script-shoot',
    label: 'Kịch bản & Quay',
    tools: [
      { name: 'Lên Kịch Bản', icon: 'story', color: 'text-violet-400', bg: 'bg-violet-400/10' },
      { name: 'Quay Phim', icon: 'camera', color: 'text-rose-400', bg: 'bg-rose-400/10' },
      { name: 'Ánh sáng', icon: 'light', color: 'text-amber-400', bg: 'bg-amber-400/10' },
    ],
  },
  {
    id: 'design',
    label: 'Thiết kế Canva',
    tools: [
      { name: 'Canva Pro', icon: 'design', color: 'text-sky-400', bg: 'bg-sky-400/10' },
      { name: 'Thumbnail', icon: 'image', color: 'text-pink-400', bg: 'bg-pink-400/10' },
      { name: 'Typography', icon: 'text', color: 'text-teal-400', bg: 'bg-teal-400/10' },
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
    title: 'Dựng Video & Edit',
    skills: [
      { name: 'CapCut (PC & Mobile)', level: 95 },
      { name: 'Premiere Pro', level: 85 },
      { name: 'Motion Graphics Cơ bản', level: 80 },
    ],
  },
  {
    title: 'Thiết kế & Nội dung',
    skills: [
      { name: 'Thiết kế Canva', level: 90 },
      { name: 'Lên Kịch bản (Scripting)', level: 85 },
      { name: 'Storytelling', level: 90 },
    ],
  },
  {
    title: 'Kỹ năng Quay & Âm thanh',
    skills: [
      { name: 'Quay phim (Shooting)', level: 85 },
      { name: 'Tìm nhạc & Ghép Sound Effect', level: 85 },
      { name: 'Lồng tiếng (Voice-over)', level: 80 },
    ],
  },
]

export const videos = []

export const projects = []
export const mcEvents = []
export const blogPosts = []

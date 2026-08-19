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
    facebook: 'https://www.facebook.com/shinne13/',
    instagram: 'https://www.instagram.com/tolason204/',
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
    year: '2023',
    title: 'Bắt đầu hành trình',
    description: 'Tự tay quay những thước phim đầu tiên và làm quen với tư duy kể chuyện qua khung hình.',
  },
  {
    year: '2024',
    title: 'Phát triển Kỹ năng',
    description: 'Làm chủ CapCut để edit tốc độ cao và ứng dụng Canva vào việc thiết kế hình ảnh, Thumbnail.',
  },
  {
    year: 'Hiện tại',
    title: 'Sáng tạo trọn gói',
    description: 'Nhận quay dựng trọn gói: từ khâu lên ý tưởng, viết kịch bản, bấm máy đến hậu kỳ hoàn thiện.',
  },
]

export const coreTools = [
  {
    name: 'CapCut (PC/Mobile)',
    description: 'Công cụ đắc lực để cắt ghép, chèn hiệu ứng, âm thanh và xuất bản video siêu tốc.',
    icon: 'video',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10'
  },
  {
    name: 'Canva Pro',
    description: 'Thiết kế thumbnail, banner, và các ấn phẩm mạng xã hội cực kỳ đẹp mắt, đồng bộ.',
    icon: 'palette',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    name: 'Lên Kịch Bản',
    description: 'Xây dựng đường dây câu chuyện, lời thoại và ý tưởng chi tiết trước khi bấm máy.',
    icon: 'book',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  },
  {
    name: 'Quay Phim',
    description: 'Trực tiếp set up góc máy, ánh sáng và ghi lại những thước phim chất lượng cao.',
    icon: 'camera',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10'
  }
]

export const traits = [
  {
    icon: 'clapperboard',
    title: 'Kể chuyện bằng hình ảnh',
    description: 'Mỗi video là một câu chuyện. Tôi tập trung vào việc dẫn dắt cảm xúc người xem.',
  },
  {
    icon: 'zap',
    title: 'Tốc độ & Hiệu quả',
    description: 'Sử dụng CapCut giúp tối ưu hóa thời gian hậu kỳ mà vẫn đảm bảo chất lượng cao.',
  },
  {
    icon: 'aperture',
    title: 'Thẩm mỹ đồng bộ',
    description: 'Kết hợp Canva để tạo ra các thumbnail và bao bì sản phẩm đẹp mắt, chuyên nghiệp.',
  },
  {
    icon: 'mic',
    title: 'Âm thanh sống động',
    description: 'Âm thanh chiếm 50% trải nghiệm. Tôi luôn chú trọng thiết kế và mix âm thanh.',
  },
]

export const skillGroups = [
  {
    title: 'Dựng Video & Edit',
    skills: [
      { name: 'CapCut (PC & Mobile)', level: 95 },
      { name: 'Hiệu ứng chuyển cảnh', level: 85 },
      { name: 'Chỉnh màu cơ bản', level: 80 },
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

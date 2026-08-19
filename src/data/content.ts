export const profile = {
  name: 'Hà Thái Sơn',
  shortName: 'TS',
  greeting: "Xin chào, tôi là",
  roles: ['Lập trình viên', 'Editor', 'MC'],
  tagline:
    'Tôi xây dựng các trải nghiệm web hiện đại, kể chuyện qua video và kết nối với khán giả với vai trò MC.',
  aboutShort:
    'Đam mê sáng tạo và công nghệ. Tôi thích biến những ý tưởng thành sản phẩm thực tế và những trải nghiệm đáng nhớ.',
  aboutLong:
    "Tôi là một lập trình viên, video editor và MC tại Việt Nam. Trong hơn 2 năm qua, tôi đã xây dựng các ứng dụng web từ đầu đến cuối, dựng những video du lịch và thương hiệu đậm chất điện ảnh, cũng như dẫn dắt hơn 30 sự kiện trực tiếp trên sân khấu. Tôi quan tâm đến giao diện tối giản, cách kể chuyện chặt chẽ và làm cho khán giả cảm nhận được điều gì đó — dù là qua một sản phẩm, một video hay một chiếc micro.",
  aboutIntro:
    "Tôi là Nguyễn Thái Sơn, một lập trình viên, video editor và MC đam mê sáng tạo các sản phẩm kỹ thuật số, kể những câu chuyện qua video và kết nối với khán giả.",
  quote:
    'Mỗi dòng code, mỗi khung hình tôi dựng, và mỗi sân khấu tôi bước lên đều là một bước tiến gần hơn tới việc tạo ra giá trị ảnh hưởng.',
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
  { id: 'projects', label: 'Dự án', icon: 'folder' },
  { id: 'videos', label: 'Video', icon: 'play' },
  { id: 'mc-host', label: 'MC / Host', icon: 'mic' },
  { id: 'blog', label: 'Blog', icon: 'file' },
  { id: 'contact', label: 'Liên hệ', icon: 'mail' },
] as const

export const whatIDo = [
  {
    icon: 'code',
    title: 'Phát triển Web',
    description: 'HTML, CSS, JavaScript, React, Tailwind, Node.js',
  },
  {
    icon: 'rocket',
    title: 'Thiết kế UI/UX',
    description: 'Figma, Responsive Design, Trải nghiệm người dùng',
  },
  {
    icon: 'clapperboard',
    title: 'Video Editing',
    description: 'Premiere Pro, After Effects, Chỉnh màu, Kỹ xảo',
  },
  {
    icon: 'lightbulb',
    title: 'Sáng tạo nội dung',
    description: 'Kể chuyện, Viết kịch bản, Định hướng sáng tạo',
  },
  {
    icon: 'mic',
    title: 'MC / Host',
    description: 'Dẫn chương trình sự kiện, Trình bày trên sân khấu',
  },
]

export const stats = [
  { icon: 'code', value: '2+', label: 'Năm kinh nghiệm' },
  { icon: 'folder', value: '15+', label: 'Dự án hoàn thành' },
  { icon: 'play-circle', value: '20+', label: 'Video đã dựng' },
  { icon: 'mic', value: '30+', label: 'Sự kiện đã dẫn' },
  { icon: 'users', value: '100%', label: 'Khách hàng hài lòng' },
]

export const journey = [
  {
    year: '2022',
    title: 'Bắt đầu hành trình',
    description: 'Bắt đầu tìm hiểu lập trình web và khám phá niềm đam mê xây dựng mọi thứ trên internet.',
  },
  {
    year: '2023',
    title: 'Phát triển & Cải thiện',
    description: 'Tham gia nhiều dự án, cải thiện kỹ năng lập trình frontend và học dựng video.',
  },
  {
    year: '2024',
    title: 'Mở rộng & Kết nối',
    description: 'Mở rộng kỹ năng sang lĩnh vực MC, sáng tạo nội dung và kết nối với những người tuyệt vời.',
  },
  {
    year: 'Hiện tại',
    title: 'Xây dựng tương lai',
    description: 'Tiếp tục học hỏi, sáng tạo và mang lại giá trị qua những dòng code, video và các sự kiện trực tiếp.',
  },
]

export const whatIDoTabs = [
  {
    id: 'development',
    label: 'Lập trình',
    tools: [
      { name: 'HTML5', icon: 'html5', color: 'text-orange-500', bg: 'bg-orange-500/10' },
      { name: 'CSS3', icon: 'css3', color: 'text-blue-500', bg: 'bg-blue-500/10' },
      { name: 'JavaScript', icon: 'js', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
      { name: 'React', icon: 'react', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
      { name: 'Tailwind CSS', icon: 'tailwind', color: 'text-teal-400', bg: 'bg-teal-400/10' },
      { name: 'Node.js', icon: 'node', color: 'text-green-500', bg: 'bg-green-500/10' },
      { name: 'Figma', icon: 'figma', color: 'text-pink-500', bg: 'bg-pink-500/10' },
      { name: 'Premiere Pro', icon: 'premiere', color: 'text-purple-400', bg: 'bg-purple-400/10' },
      { name: 'After Effects', icon: 'aftereffects', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    ],
  },
  {
    id: 'video-editing',
    label: 'Dựng Video',
    tools: [
      { name: 'Premiere Pro', icon: 'premiere', color: 'text-purple-400', bg: 'bg-purple-400/10' },
      { name: 'After Effects', icon: 'aftereffects', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
      { name: 'CapCut', icon: 'capcut', color: 'text-slate-200', bg: 'bg-slate-400/10' },
      { name: 'DaVinci Resolve', icon: 'davinci', color: 'text-rose-400', bg: 'bg-rose-400/10' },
      { name: 'Chỉnh màu', icon: 'color', color: 'text-amber-400', bg: 'bg-amber-400/10' },
      { name: 'Audition', icon: 'audio', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    ],
  },
  {
    id: 'mc-host',
    label: 'MC / Host',
    tools: [
      { name: 'Nói trước công chúng', icon: 'mic', color: 'text-orange-400', bg: 'bg-orange-400/10' },
      { name: 'Viết kịch bản', icon: 'script', color: 'text-sky-400', bg: 'bg-sky-400/10' },
      { name: 'Phong thái sân khấu', icon: 'stage', color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/10' },
      { name: 'Lên kế hoạch sự kiện', icon: 'event', color: 'text-lime-400', bg: 'bg-lime-400/10' },
      { name: 'Khán giả', icon: 'audience', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    ],
  },
  {
    id: 'content-creation',
    label: 'Sáng tạo nội dung',
    tools: [
      { name: 'Kể chuyện', icon: 'story', color: 'text-violet-400', bg: 'bg-violet-400/10' },
      { name: 'Instagram', icon: 'instagram', color: 'text-pink-400', bg: 'bg-pink-400/10' },
      { name: 'YouTube', icon: 'youtube', color: 'text-red-400', bg: 'bg-red-400/10' },
      { name: 'SEO & Hashtags', icon: 'seo', color: 'text-teal-400', bg: 'bg-teal-400/10' },
      { name: 'Phân tích dữ liệu', icon: 'analytics', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    ],
  },
]

export const traits = [
  {
    icon: 'code',
    title: 'Code sạch',
    description: 'Tôi viết code sạch, hiệu quả, dễ mở rộng và tuân thủ các best practice.',
  },
  {
    icon: 'lightbulb',
    title: 'Tư duy sáng tạo',
    description: 'Tôi thích biến những ý tưởng thành các giải pháp kỹ thuật số và câu chuyện hình ảnh.',
  },
  {
    icon: 'mic',
    title: 'Giao tiếp tự tin',
    description: 'Với vai trò MC, tôi kết nối với khán giả và truyền tải thông điệp một cách ấn tượng.',
  },
  {
    icon: 'users',
    title: 'Làm việc nhóm',
    description: 'Tôi thích cộng tác, chia sẻ ý tưởng và cùng nhau phát triển.',
  },
]

export const skillGroups = [
  {
    title: 'Phát triển Web',
    skills: [
      { name: 'HTML / CSS', level: 95 },
      { name: 'JavaScript / TypeScript', level: 88 },
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Node.js', level: 75 },
    ],
  },
  {
    title: 'Thiết kế',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Responsive Design', level: 90 },
      { name: 'UI/UX Principles', level: 82 },
    ],
  },
  {
    title: 'Video & Truyền thông',
    skills: [
      { name: 'Premiere Pro', level: 90 },
      { name: 'After Effects', level: 78 },
      { name: 'Chỉnh màu', level: 80 },
      { name: 'Thiết kế âm thanh', level: 70 },
    ],
  },
  {
    title: 'Dẫn chương trình & Giao tiếp',
    skills: [
      { name: 'Thuyết trình sân khấu', level: 95 },
      { name: 'Viết kịch bản', level: 85 },
      { name: 'Nói trước công chúng', level: 92 },
    ],
  },
]

export const projectCategories = [
  'Tất cả dự án',
  'Lập trình Web',
  'Phân tích nghiệp vụ',
  'Dựng Video',
  'Sáng tạo nội dung',
  'Khác',
] as const

export const projects = [
  {
    title: 'Dashboard Phân Tích',
    category: 'Lập trình Web',
    badge: 'Lập trình Web',
    description:
      'Dashboard phân tích đáp ứng với tính năng trực quan hóa dữ liệu theo thời gian thực, phân quyền và báo cáo tương tác.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    thumbnail: 'dashboard',
    accent: 'from-violet-500 to-indigo-600',
  },
  {
    title: 'Trang Web E-Commerce',
    category: 'Lập trình Web',
    badge: 'Lập trình Web',
    description: 'Website thương mại điện tử hiện đại với bộ lọc sản phẩm, giỏ hàng, thanh toán và tích hợp Stripe.',
    tags: ['Next.js', 'Redux Toolkit', 'Stripe', 'MongoDB'],
    thumbnail: 'ecommerce',
    accent: 'from-fuchsia-500 to-pink-600',
  },
  {
    title: 'Hệ thống E-Voting (BA)',
    category: 'Phân tích nghiệp vụ',
    badge: 'Phân tích nghiệp vụ',
    description:
      'Phân tích nghiệp vụ, mô hình use case, luồng quy trình và tài liệu yêu cầu cho hệ thống bầu cử điện tử.',
    tags: ['UML', 'Use Case', 'Process Flow', 'SRS'],
    thumbnail: 'flowchart',
    accent: 'from-slate-300 to-slate-500',
  },
  {
    title: 'Video Du Lịch Điện Ảnh',
    category: 'Dựng Video',
    badge: 'Dựng Video',
    description: 'Dựng một video du lịch đậm chất điện ảnh với hiệu ứng chuyển cảnh, chỉnh màu và lối kể chuyện.',
    tags: ['CapCut', 'Chỉnh màu', 'Chuyển cảnh', 'Đồng bộ âm thanh'],
    thumbnail: 'travel-video',
    accent: 'from-slate-700 to-slate-900',
  },
  {
    title: 'Chuỗi Nội Dung Mạng Xã Hội',
    category: 'Sáng tạo nội dung',
    badge: 'Sáng tạo nội dung',
    description: 'Lên kế hoạch, quay và dựng chuỗi nội dung cho nền tảng TikTok, YouTube Shorts và Instagram.',
    tags: ['CapCut', 'Viết kịch bản', 'Chiến lược nội dung', 'SEO'],
    thumbnail: 'social-series',
    accent: 'from-amber-500 to-orange-600',
  },
  {
    title: 'MC / Dẫn Chương Trình',
    category: 'Khác',
    badge: 'MC / Host',
    description: 'Dẫn dắt các sự kiện, workshop và chương trình với kỹ năng giao tiếp tự tin và tương tác khán giả.',
    tags: ['MC', 'Thuyết trình', 'Giao tiếp', 'Nói trước đám đông'],
    thumbnail: 'stage',
    accent: 'from-slate-800 to-black',
  },
]

export const projectStats = [
  { icon: 'code', value: '15+', label: 'Dự án hoàn thành' },
  { icon: 'clipboard', value: '5+', label: 'Lĩnh vực đã làm' },
  { icon: 'users', value: '20K+', label: 'Người dùng' },
  { icon: 'play-circle', value: '30+', label: 'Video đã dựng' },
  { icon: 'calendar', value: '10+', label: 'Sự kiện đã dẫn' },
  { icon: 'trophy', value: '100%', label: 'Độ hài lòng' },
]

export const videos = [
  { title: 'Video Du Lịch Điện Ảnh', category: 'Dựng bằng Premiere Pro', duration: '02:45', accent: 'from-slate-700 to-slate-900' },
  { title: 'Video Promo Thương Hiệu', category: 'Dựng bằng After Effects', duration: '01:30', accent: 'from-violet-600 to-purple-800' },
  { title: 'Highlight Đám Cưới', category: 'Dựng bằng Premiere Pro', duration: '03:12', accent: 'from-rose-500 to-red-700' },
  { title: 'Teaser Ra Mắt Sản Phẩm', category: 'Motion Graphics', duration: '00:45', accent: 'from-cyan-500 to-blue-700' },
]

export const mcEvents = [
  { title: 'Highlight Dẫn Chương Trình', category: 'MC / Host', duration: '03:12' },
  { title: 'Gala Dinner Doanh Nghiệp', category: 'MC / Host', duration: '04:20' },
  { title: 'Khai Mạc Hội Nghị Công Nghệ', category: 'MC / Host', duration: '02:05' },
]

export const blogPosts = [
  {
    title: 'Cách tôi tổ chức một Portfolio React',
    excerpt: 'Cái nhìn chi tiết về kiến trúc component và quyết định thiết kế đằng sau trang web này.',
    date: 'Tháng 7 2026',
    tag: 'Phát triển Web',
  },
  {
    title: '5 mẹo chỉnh màu cho Footage điện ảnh',
    excerpt: 'Những cách nhanh chóng trong Premiere Pro để biến video du lịch trở nên đậm chất phim.',
    date: 'Tháng 6 2026',
    tag: 'Dựng Video',
  },
  {
    title: 'Bài học từ 30+ sự kiện trực tiếp',
    excerpt: 'Ghi chép về phong thái sân khấu, viết kịch bản và cách giữ sự chú ý của khán giả.',
    date: 'Tháng 5 2026',
    tag: 'MC / Host',
  },
]

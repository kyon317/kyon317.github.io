interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  // {
  //   title: 'A Search Engine',
  //   description: `What if you could look up any information in the world? Webpages, images, videos
  //   and more. Google has many features to help you find exactly what you're looking
  //   for.`,
  //   imgSrc: '/static/images/google.png',
  //   href: 'https://www.google.com',
  // },
  {
    title: 'Digital Twin - Your Data, Your Rules',
    description: `A conversational AI agent that maintains structured memory of user-specific facts, mimics user face and voice, and exposes memory as an interactive surface for data governance. 
    This project combines neuroscience-inspired memory architecture with multimodal embodiment and interactive memory governance.`,
    imgSrc: '/static/images/digital-twin/reject_approve.png',
    href: '/blog/digital-twin',
  },
  {
    title: 'Learned Motion Matching',
    description: `An implementation of Learned Motion Matching with deep neural networks for real-time character animation. 
    This project combines traditional motion matching algorithms with deep learning to create smooth, responsive character animations.`,
    imgSrc: '/static/images/motion-matching/lmm_walk.gif',
    href: '/blog/learned-motion-matching',
  },
  {
    title: 'Reinforcement Learning Soccer Bot',
    description: `Training intelligent soccer-playing agents using reinforcement learning algorithms in DeepMind Soccer Environment. 
    This project implements and compares SAC, PPO, and POCA algorithms to develop autonomous multi-agent soccer players.`,
    imgSrc: '/static/images/rl-soccer/soccer.png',
    href: '/blog/rl-soccer-bot',
  },
  {
    title: 'Total Recall',
    description: `A Software Framework for Capturing Events of Interest from Long Surveillance Videos`,
    imgSrc: '/static/images/total-recall/detail.png',
    href: '/blog/total-recall',
  },
  {
    title: 'Single Shot Detection',
    description: `This article implements Single Shot Detection (SSD), 
    a fast object detection model using multi-scale feature maps and anchor boxes. 
    It follows the standard SSD pipeline with a VGG16 backbone, 
    enabling real-time performance with efficient bounding box predictions.`,
    imgSrc: '/static/images/SSD.png',
    href: '/blog/SSD',
  },
  {
    title: 'Restaurant Quality App',
    description: `An Android application to show qualities of restaurants in Surrey, Vancouver.`,
    imgSrc: '/static/images/restaurant.png',
    href: '/blog/restaurant-quality-app',
  },
]

export default projectsData

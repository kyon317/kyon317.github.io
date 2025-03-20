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

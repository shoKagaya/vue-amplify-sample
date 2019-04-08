import startImg from '@/assets/img/anime_start_text.svg'
import circleImg from '@/assets/img/anime_start_circle.svg'
import completedImg from '@/assets/img/anime_completed_text.svg'
import completedBgImg from '@/assets/img/anime_completed_bg.svg'
import stampImg from '@/assets/img/anime_stampImage.svg'
import pressStarImg from '@/assets/img/anime_starImage.svg'

export const start = {
  start: {
    path: startImg,
    alt: 'START'
  },
  circle: {
    path: circleImg,
    alt: 'background image'
  }
}

export const completed = {
  completedText: {
    path: completedImg,
    alt: 'コンプリート'
  },
  star: [
    {
      alt: 'star 1'
    },
    {
      alt: 'star 2'
    },
    {
      alt: 'star 3'
    },
    {
      alt: 'star 4'
    },
    {
      alt: 'star 5'
    },
    {
      alt: 'star 6'
    },
    {
      alt: 'star 7'
    },
    {
      alt: 'star 8'
    },
    {
      alt: 'star 9'
    },
    {
      alt: 'star 10'
    },
    {
      alt: 'star 11'
    },
    {
      alt: 'star 12'
    },
    {
      alt: 'star 13'
    },
    {
      alt: 'star 14'
    }
  ],
  bgImg: {
    path: completedBgImg,
    alt: 'bg'
  }
}

export const press = {
  stampImage: {
    path: stampImg,
    alt: 'スタンプ画像'
  },
  starImage: {
    path: pressStarImg,
    alt: 'star 1'
  }
}

import React from 'react';
import IMG1 from '../../assets/tharapa.PNG';
import IMG2 from '../../assets/livechat.PNG';
import IMG3 from '../../assets/biminer.PNG';
import IMG4 from '../../assets/tharapashop.PNG';
import IMG5 from '../../assets/boss.png';
import IMG6 from '../../assets/gscafepos.PNG';
import IMG7 from '../../assets/istock.PNG';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Tharapa Chatbot and Ecommerce',
      img: IMG1,
      description:
        'Create messenger chatbot and sell products on the chatbot.Sales transactions can be view at admin portal dashboard',
      technologies: 'Node js | VUE Js | Laravel | Facebook APIs | MySQL | MongoDB | AWS EC2 RDS',
      link: 'https://tharapa.ai/',
      github: '',
    },
    {
      id: 3,
      title: 'BI Miner',
      img: IMG3,
      description: 'Social Listening Tool which can monitor Facebook public pages. Crawling data using Facebook Graph API, storing in MongoDB, and visualization data on analytics data.',
      technologies: 'Laravel | Node Js | MySQL | MongoDB | Facebook APIs | AWS EC2 S3',
      link: 'https://business.baganintel.com/en/biminer',
      github: '',
    },
    {
      id: 2,
      title: 'Tharapa Live Chat',
      img: IMG2,
      description:
        'LiveChat Tool for Facebook Messenger and Viber.',
      technologies: 'VUE Js | Node Js',
      link: 'https://livechat.tharapa.ai/',
      github: '',
    },
    {
      id: 4,
      title: 'Tharapa Ecommerce',
      img: IMG4,
      description:
        'E-commerce Platform that can connect with Tharapa Chatbot.',
      technologies: 'Laravel | MySQL | AWS EC2 S3',
      link: 'https://shop.tharapa.com/',
      github: '',
    },
    {
      id: 5,
      title: 'BOSS POS',
      img: IMG5,
      description:
        'Point of Sales and Inventory Control Management System(Multi Branch and Outlet).',
      technologies: 'PHP | codeigniter | C#.net | MySQL | MSSQL | RDLC',
      link: 'https://www.bossposmm.com/boss_analytics/',
      github: '',
    },
    {
      id: 6,
      title: 'GSCafePOS',
      img: IMG6,
      description:
        'Restaurant Management System which includes features of POS, Waiter Tablet, Print Directly to Kitchen, etc…',
      technologies: 'C#.net | RDLC | MSSQL | Java | IIS Server | Team Foundation Server',
      link: 'https://galaxy.com.mm/archives/product/cafepos',
      github: '',
    },
    {
      id: 7,
      title: 'iStock',
      img: IMG7,
      description:
        'Inventory Control Management System (Sale, Purchase, Multi-Currency, Outstanding, Inventory(FIFO, LIFO, AVERAGE)).',
      technologies: 'C#.net | RDLC | MSSQL | Team Foundation Server',
      link: 'https://galaxy.com.mm/archives/product/myanmar-istock',
      github: '',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Previous Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {/* <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a> */}
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

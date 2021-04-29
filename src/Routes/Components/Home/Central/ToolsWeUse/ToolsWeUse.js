import React from 'react';
import jquery from '../../../../imgs/tools/jquery.svg';
import reactjs from '../../../../imgs/tools/reactjs.svg';
import nodejs from '../../../../imgs/tools/nodejs.svg';
import javascript from '../../../../imgs/tools/javascript.svg';
import html5 from '../../../../imgs/tools/html5.svg';
import css3 from '../../../../imgs/tools/css3.svg';
import mysql from '../../../../imgs/tools/mysql.svg';
import mongodb from '../../../../imgs/tools/mongodb.svg';
import mariadb from '../../../../imgs/tools/mariadb.svg';
import '../../../../css/HomeCentral.css';

const ToolsWeUse = () => {
  const tools = [
    {
      tool: 'Jquery',
      link: `${jquery}`,
    },
    {
      tool: 'Reactjs',
      link: `${reactjs}`,
    },
    {
      tool: 'Nodejs',
      link: `${nodejs}`,
    },
    {
      tool: 'Javascript',
      link: `${javascript}`,
    },
    {
      tool: 'HTML5',
      link: `${html5}`,
    },
    {
      tool: 'CSS3',
      link: `${css3}`,
    },
    {
      tool: 'MongoDB',
      link: `${mongodb}`,
    },
    {
      tool: 'mySql',
      link: `${mysql}`,
    },
    // {
    //   tool: 'Photoshop',
    //   link: 'https://img.icons8.com/color/100/000000/adobe-photoshop.png',
    // },
    {
      tool: 'MariaDB',
      link: `${mariadb}`,
    },
  ];

  const displayTools = () => {
    return tools.map((el) => {
      return (
        <div className='central-tools-img' key={el.name}>
          <img src={el.link} alt={el.tool} />
        </div>
      );
    });
  };
  return <div class='central-tools-container'>{displayTools()}</div>;
};

export default ToolsWeUse;

import React, { FC } from "react";
import styles from './Person.module.scss'
import { List } from 'antd';

const data = [
  '- 专业：计算机科学与技术',
  '- 本科：南昌大学 211',
  '- 硕士：北京邮电大学 211',
];

const InfoList: FC = () => {
  const isSplit: boolean = false
  return (
    <>
      <List
        size="small"
        split={isSplit}
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  )
}

const Person: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles['half-container']}>
        <div className={styles['left-content']}>
          <h1 style={{ paddingLeft: '20px' }}>任精普</h1>
          <InfoList />
        </div>
      </div>
      <div className={styles['half-container']}>任天峰</div>
    </div>
  )
}

export default Person
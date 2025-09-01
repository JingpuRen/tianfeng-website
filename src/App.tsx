import styles from './App.module.scss'
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import PageInfoList from './components/Page';
import { useState } from "react";
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

function App() {
  const [currentPageId, setCurrentPageId] = useState<number>(1)

  const handleClickDown = () => {
    let newPageId = currentPageId + 1
    setCurrentPageId(newPageId)
  }

  const handleClickUp = () => {
    let newPageId = currentPageId - 1
    setCurrentPageId(newPageId)
  }

  const getRenderComponent = (pageId: number) => {
    const matchedItem = PageInfoList.find((item) => item.page_id === pageId);
    return matchedItem ? <matchedItem.component /> : null;
  }

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <Tooltip title="上一页">
          <Button shape="circle" icon={<UpOutlined />} onClick={handleClickUp} disabled={currentPageId === 1 ? true : false} />
        </Tooltip>
      </div>

      <div className={styles.middle}>
        {getRenderComponent(currentPageId)}
      </div>

      <div className={styles.footer}>
        <Tooltip title="下一页">
          <Button shape="circle" icon={<DownOutlined />} onClick={handleClickDown} disabled={currentPageId === PageInfoList.length ? true : false} />
        </Tooltip>
      </div>
    </div>
  );
}

export default App;

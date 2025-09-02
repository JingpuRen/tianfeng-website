import styles from './App.module.scss'
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import PageInfoList from './components/Page';
import { useState } from "react";
import Siderbar from './components/Sidebar/Sidebar';

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

  const handleNavClick = (pageId: number) => {
    setCurrentPageId(pageId);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div
        className={styles.header}
        style={{ backgroundImage: "url('/images/header.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {currentPageId !== 1 && (
          <div style={{ paddingTop: "7px" }}>
            <Tooltip title="上一页">
              <Button shape="circle" icon={<UpOutlined />} onClick={handleClickUp} disabled={currentPageId === 1 ? true : false} />
            </Tooltip>
          </div>
        )}
      </div>

      {/* Middle */}
      <div className={styles.middle}>
        <Siderbar pageInfoList={PageInfoList} onClick={handleNavClick} currentPageId={currentPageId} />
        <div style={{ flex: 1 }}>
          {getRenderComponent(currentPageId)}
        </div>
      </div>

      {/* Footer */}
      <div className={`${styles.footer}`} style={{ backgroundImage: "url('/images/footer.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        {currentPageId !== PageInfoList.length && (
          <div style={{ paddingTop: "42px" }}>
            <Tooltip title="下一页">
              <Button shape="circle" icon={<DownOutlined />} onClick={handleClickDown} disabled={currentPageId === PageInfoList.length ? true : false} />
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

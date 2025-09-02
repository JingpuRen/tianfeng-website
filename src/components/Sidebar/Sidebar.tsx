import { FC } from "react";
import { PageInfoType } from "../Page";
import styles from './Sidebar.module.scss';

export interface SidebarProps {
  pageInfoList: Array<PageInfoType>
  onClick: (pageId: number) => void
  currentPageId: number
}

const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  const { pageInfoList, onClick: handleNavClick, currentPageId } = props;

  return (
    <div className={styles.floatNav}>
      {pageInfoList.map(item => (
        <div
          key={item.page_id}
          className={`${styles.navItem} ${currentPageId === item.page_id ? styles.activeNavItem : ''}`}
          onClick={handleNavClick.bind(null, item.page_id)}
        >
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Sidebar
import { FC } from "react"
import Person from "../Person/Person"
import Project from "../Project/Project"

export type PageInfoType = {
  page_id: number
  component: FC
  title: string
}

const PageInfoList: Array<PageInfoType> = [
  { page_id: 1, component: Person, title: "个人背景" },
  { page_id: 2, component: Project, title: "项目经历" },
]

export default PageInfoList
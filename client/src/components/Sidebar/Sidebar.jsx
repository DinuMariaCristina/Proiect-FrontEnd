import "./sidebar.css"
import {RssFeed, ChatRounded,VideoFile,Groups,BookmarksRounded,QuestionMark,WorkRounded,Event,SchoolRounded} from "@mui/icons-material"
import {Users} from "../../dummyData"
import Friend from "../Friend/Friend"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatRounded className="sidebarIcon"/>
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <VideoFile className="sidebarIcon"/>
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Groups className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksRounded className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <QuestionMark className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkRounded className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolRounded className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          {Users.map(u=>(
            <Friend user={u} key={u.id}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

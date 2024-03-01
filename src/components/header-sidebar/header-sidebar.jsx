import "./header-sidebar.css"
import { Location, useLocation } from "react-router-dom"

export default function HeaderSidebar(){
    const location = useLocation();
    return(
        <main className="hs-container">
            <div className="hs-header">
                <div className="hs-logo-container">
                    <h1 className="hs-logo">EM <span className="hs-logo-highlight">3D</span></h1>
                </div>
                <div className="vertical-divider"></div>
                <div className="hs-header-container">
                    <h1 className="hs-title">{location.pathname}</h1>
                </div>
            </div>
        </main>
    )
}
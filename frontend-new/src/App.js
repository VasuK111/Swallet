import "./App.css";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import Home from "./Pages/Home";
import Option from "./Pages/Option";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboard from "./Pages/UserDashboard";
import Client from "./Pages/Client";
import NodeMap from "./Components/NodeMap";


const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <WagmiConfig config={config}>
      <ConnectKitProvider customTheme={{
        "--ck-font-weight": "20px",
  "--ck-font-family": "Poppins",
  "--ck-font-weight": "400",
  "--ck-border-radius": "20px",
  "--ck-overlay-backdrop-filter": "blur(8px)",
  "--ck-modal-heading-font-weight": "500",
  "--ck-qr-border-radius": "16px",
  "--ck-connectbutton-font-size": "15px",
  "--ck-connectbutton-color": "#373737",
  "--ck-connectbutton-background": "#F6F7F9",
  "--ck-connectbutton-background-secondary": "#FFFFFF",
  "--ck-connectbutton-border-radius": "16px",
  "--ck-connectbutton-box-shadow": "0 0 0 0 #ffffff",
  "--ck-connectbutton-hover-color": "#373737",
  "--ck-connectbutton-hover-background": "#F0F2F5",
  "--ck-connectbutton-hover-box-shadow": "0 0 0 0 #ffffff",
  "--ck-connectbutton-active-color": "#373737",
  "--ck-connectbutton-active-background": "#EAECF1",
  "--ck-connectbutton-active-box-shadow": "0 0 0 0 #ffffff",
  "--ck-connectbutton-balance-color": "#373737",
  "--ck-connectbutton-balance-background": "#fff",
  "--ck-connectbutton-balance-box-shadow": "inset 0 0 0 1px #F6F7F9",
  "--ck-connectbutton-balance-hover-background": "#F6F7F9",
  "--ck-connectbutton-balance-hover-box-shadow": "inset 0 0 0 1px #F0F2F5",
  "--ck-connectbutton-balance-active-background": "#F0F2F5",
  "--ck-connectbutton-balance-active-box-shadow": "inset 0 0 0 1px #EAECF1",
  "--ck-primary-button-font-weight": "600",
  "--ck-primary-button-border-radius": "16px",
  "--ck-primary-button-color": "#ffffff",
  "--ck-primary-button-background": "#9d48ac",
  "--ck-primary-button-box-shadow": "5px 5px 5px 0px #e1c5e8",
  "--ck-primary-button-hover-color": "#373737",
  "--ck-primary-button-hover-background": "#dfb4e9",
  "--ck-primary-button-hover-box-shadow": "0 0 0 0 #ffffff",
  "--ck-primary-button-active-color": "#373737",
  "--ck-primary-button-active-background": "#F0F2F5",
  "--ck-primary-button-active-box-shadow": "0 0 0 0 #ffffff",
  "--ck-secondary-button-font-weight": "500",
  "--ck-secondary-button-border-radius": "16px",
  "--ck-secondary-button-color": "#373737",
  "--ck-secondary-button-background": "#F6F7F9",
  "--ck-secondary-button-box-shadow": "0 0 0 0 #ffffff",
  "--ck-secondary-button-hover-color": "#373737",
  "--ck-secondary-button-hover-background": "#dfe4ec",
  "--ck-secondary-button-hover-box-shadow": "0 0 0 0 #ffffff",
  "--ck-secondary-button-active-color": "#373737",
  "--ck-secondary-button-active-background": "#dfe4ec",
  "--ck-secondary-button-active-box-shadow": "0 0 0 0 #ffffff",
  "--ck-tertiary-button-font-weight": "500",
  "--ck-tertiary-button-border-radius": "16px",
  "--ck-tertiary-button-color": "#373737",
  "--ck-tertiary-button-background": "#F6F7F9",
  "--ck-tertiary-button-box-shadow": "0 0 0 0 #ffffff",
  "--ck-tertiary-button-hover-color": "#373737",
  "--ck-tertiary-button-hover-background": "#F6F7F9",
  "--ck-tertiary-button-hover-box-shadow": "0 0 0 0 #ffffff",
  "--ck-tertiary-button-active-color": "#373737",
  "--ck-tertiary-button-active-background": "#F6F7F9",
  "--ck-tertiary-button-active-box-shadow": "0 0 0 0 #ffffff",
  "--ck-modal-box-shadow": "0px 2px 4px 0px #00000005",
  "--ck-overlay-background": "#f7edf9",
  "--ck-body-color": "#000435",
  "--ck-body-color-muted": "#999999",
  "--ck-body-color-muted-hover": "#111111",
  "--ck-body-background": "#ffffff",
  "--ck-body-background-transparent": "rgba(255,255,255,0)",
  "--ck-body-background-secondary": "#f6f7f9",
  "--ck-body-background-secondary-hover-background": "#e0e4eb",
  "--ck-body-background-secondary-hover-outline": "#4282FF",
  "--ck-body-background-tertiary": "#F3F4F7",
  "--ck-body-action-color": "#999999",
  "--ck-body-divider": "#f7f6f8",
  "--ck-body-color-danger": "#FF4E4E",
  "--ck-body-color-valid": "#32D74B",
  "--ck-siwe-border": "#F0F0F0",
  "--ck-body-disclaimer-background": "#f6f7f9",
  "--ck-body-disclaimer-color": "#AAAAAB",
  "--ck-body-disclaimer-link-color": "#838485",
  "--ck-body-disclaimer-link-hover-color": "#000000",
  "--ck-tooltip-background": "#ffffff",
  "--ck-tooltip-background-secondary": "#ffffff",
  "--ck-tooltip-color": "#999999",
  "--ck-tooltip-shadow": "0px 2px 10px 0 #00000014",
  "--ck-dropdown-button-color": "#999999",
  "--ck-dropdown-button-box-shadow": "0 0 0 1px rgba(0,0,0,0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)",
  "--ck-dropdown-button-background": "#fff",
  "--ck-dropdown-button-hover-color": "#8B8B8B",
  "--ck-dropdown-button-hover-background": "#F5F7F9",
  "--ck-qr-dot-color": "#000000",
  "--ck-qr-background": "#ffffff",
  "--ck-qr-border-color": "#f7f6f8",
  "--ck-focus-color": "#1A88F8",
  "--ck-spinner-color": "#1A88F8",
  "--ck-copytoclipboard-stroke": "#CCCCCC",
  "--ck-recent-badge-color": "#777",
  "--ck-recent-badge-background": "#F6F7F9",
  "--ck-recent-badge-border-radius": "32px"
}}  >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/option" element={<Option />} />
          <Route path="/users" element={<UserDashboard />} />
          <Route path="/client" element={<Client />} />
          <Route path="/session-details" element={<NodeMap />} />
        </Routes>
        </ConnectKitProvider>
    </WagmiConfig>
      </BrowserRouter>
    </div>
  );
}

export default App;

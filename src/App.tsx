import "./App.css";
import { useMemo } from "react";

import env from "react-dotenv";

import Home from "./Home";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";

import AboutUsPage from "./views/AboutUsPage/AboutUsPage";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FinnAssetPage from "./views/FinnAssetPage/FinnAssetPage.js";

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: 'flex-start',
            },
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: '12px 16px',
            },
            startIcon: {
                marginRight: 8,
            },
            endIcon: {
                marginLeft: 8,
            },
        },
    },
});

var hist = createBrowserHistory();

let AvailableItemsCount = {counter: 0};




const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
        getPhantomWallet(),
        getSlopeWallet(),
        getSolflareWallet(),
        getSolletWallet({ network }),
        getSolletExtensionWallet({ network })
    ],
    []
  );

  return (
      <Router>
            <Switch>
                <Route exact path="/">
                    <ThemeProvider theme={theme}>
                        <ConnectionProvider endpoint={endpoint}>
                            <WalletProvider wallets={wallets} autoConnect={true}>
                                <WalletDialogProvider>
                                    <Home
                                        availableCounter={AvailableItemsCount}
                                        candyMachineId={candyMachineId}
                                        config={config}
                                        connection={connection}
                                        startDate={startDateSeed}
                                        treasury={treasury}
                                        txTimeout={txTimeout}
                                    />
                                </WalletDialogProvider>
                            </WalletProvider>
                        </ConnectionProvider>
                    </ThemeProvider>
                    <AboutUsPage availableCounter={AvailableItemsCount}/>
                </Route>
                <Route path="/finn/:uuid" component={FinnAssetPage}></Route>
                <Route path="/*">
                    <div><p>Does not exist.</p></div>
                </Route>

            </Switch>
        </Router>
  );
};

export default App;


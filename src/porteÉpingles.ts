import ClientConstellation, { proxy } from "@constl/ipa";

export class porteÉpingles {
    constellation: ClientConstellation;
    
    constructor() {
        this.constellation = proxy.ipa.générerProxyProc()
    }
};
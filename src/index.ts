import ClapperBotInit from "./ClapperBot";

let botInits: (() => any)[] = [ClapperBotInit];

botInits.forEach(init => init());

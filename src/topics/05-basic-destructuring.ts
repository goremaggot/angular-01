interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 100,
    songDuration: 250,
    song: "Disasterpieces",
    details: {
        author: "Slipknot",
        year: 2000
    }
}

const { details: detalle } = audioPlayer;
const { author: autor } = detalle;

const dbCharacters: string[] = ['Goku', 'Vegueta', 'Trukns'];

const [, , trunks = 'Trunks'] = dbCharacters;

console.log(trunks);
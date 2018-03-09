import {Player} from '../Models/player'
import {Status} from '../Models/status'

export class Match{
    id: number;
    title: string;
    status: Status;
    opponent: string;
    time: string;
    court: string;
    goalsFor: number;
    goalsAgainst: number;
    players: Player[];
}
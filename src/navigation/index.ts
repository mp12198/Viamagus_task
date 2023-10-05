import {ScreenName} from '../constants/ScreenName';
import Leaderboard from '../screen/Leaderboard';
import Leagues from '../screen/Leagues/Leagues';
import Profile from '../screen/Profile';
import Research from '../screen/Research';
import Home from './HomeTabNav/HomeTabNav';

type Screens = {
  name: string;
  component: any;
  family?: string;
  iconName?: any;
  tabName: string;
};

export const screenData: Screens[] = [
  {
    name: ScreenName.HOMESCREEN,
    component: Home,
    family: 'Ionicons',
    iconName: 'home',
    tabName: ScreenName.HOMESCREEN,
  },
  {
    name: ScreenName.LEAGUESCREEN,
    component: Leagues,
    family: 'Ionicons',
    iconName: 'trophy',
    tabName: ScreenName.LEAGUESCREEN,
  },
  {
    name: ScreenName.RESEARCHSCREEN,
    component: Research,
    family: 'Ionicons',
    iconName: 'search-outline',
    tabName: ScreenName.RESEARCHSCREEN,
  },
  {
    name: ScreenName.LEADERBOARDSCREEN,
    component: Leaderboard,
    family: 'MaterialIcons',
    iconName: 'leaderboard',
    tabName: ScreenName.LEADERBOARDSCREEN,
  },
  {
    name: ScreenName.PROFILESCREEN,
    component: Profile,
    family: 'MaterialIcons',
    iconName: 'people',
    tabName: ScreenName.PROFILESCREEN,
  },
];

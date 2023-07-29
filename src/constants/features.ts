import * as images from '../assets/png';
import * as icons from '../assets/svg';

const FEATURES = [{
  id: 'scan',
  background: '#EFF1FF',
  image: images.Scan,
  alt: 'Scanning process',
  title: 'Spyware detector',
  description: 'Find apps secretly spying on you and your data.',
  advantageList: [
    { icon: icons.Identity, description: 'Full background anti-spyware scan' },
    { icon: icons.Bell, description: 'Instant spyware detection alerts' },
    { icon: icons.Network, description: 'Immediate threat quarantining' }
  ],
},
{
  id: 'hide',
  background: '#F6EDFA',
  image: images.Hide,
  alt: 'Map with location',
  title: 'Tracker detector',
  description: 'Discover who tracks your location to spy on you.',
  advantageList: [
    { icon: icons.Spyware, description: 'Stop being secretly tracked' },
    { icon: icons.Location, description: 'Protect your real location' },
    { icon: icons.Safari, description: 'Control who sees your location' }
  ],
},
{
  id: 'check',
  background: '#E6F2FE',
  image: images.Check,
  alt: 'Social health check',
  title: 'Social media protection',
  description: 'Easily prevent social media account hacks.',
  advantageList: [
    { icon: icons.Instagram, description: 'See who uses your accounts' },
    { icon: icons.Antivirus, description: 'Revoke access for other users' },
    { icon: icons.Bell, description: 'Get unauthorized login alerts' }
  ],
},
{
  id: 'protect',
  background: '#EAF5E4',
  image: images.Protect,
  alt: 'Information security',
  title: 'Call recorder blocker',
  description: 'Discover if someone records your calls and chats.',
  advantageList: [
    { icon: icons.Device, description: 'Hide your call history and records' },
    { icon: icons.Widget, description: 'Revoke sharing your contact list' },
    { icon: icons.Alert, description: 'Help secret texts remain secret' }
  ],
},
{
  id: 'stop',
  background: '#EFF1FF',
  image: images.Stop,
  alt: 'Recording process',
  title: 'Screen recording detector',
  description: 'Don’t let anyone access your phone screen.',
  advantageList: [
    { icon: icons.Spy, description: 'Find out if your screen is being recorded' },
    { icon: icons.NoSpy, description: 'Immediately stop silent recordings' },
    { icon: icons.Bell, description: 'Get alerts if your camera is in use' }
  ],
}];

export default FEATURES;

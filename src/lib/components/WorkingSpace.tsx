import H3 from 'lib/ui/H3';
import H6 from 'lib/ui/H6';

import IMG_1 from 'assets/imgs/WorkingSpace/1.png';
import IMG_2 from 'assets/imgs/WorkingSpace/2.png';
import IMG_3 from 'assets/imgs/WorkingSpace/3.png';
import IMG_4 from 'assets/imgs/WorkingSpace/4.png';
import IMG_5 from 'assets/imgs/WorkingSpace/5.png';
import IMG_6 from 'assets/imgs/WorkingSpace/6.png';
import Gallary from 'lib/components/Gallary';


export default function () {
  return (
    <div className="Section">
      <H6>Working space</H6>
      <H3>Let’s meet our interior room decoration</H3>
      <Gallary images={[
        [IMG_1, "Front working space"],
        [IMG_2, "Meeting corner"],
        [IMG_3, "Guest meeting room"],
        [IMG_4, "Guest rest room"],
        [IMG_5, "Single working space"],
        [IMG_6, "Kitchen room"],
      ]}/>
    </div>
  )
};

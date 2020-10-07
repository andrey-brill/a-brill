
import { React } from '../../chunk-e.js';
import { CONTACTS_ID } from '../../helpers/Constants.js';
import { SocialLogotypes } from './SocialLogotypes.jsx';

import style from './Contacts.m.scss';


export const Contacts = () => (
  <div id={CONTACTS_ID} className={style.contacts}>
    <div>
        <a className={style.email} href="mailto:andrey@a-brill.com">andrey<span>@</span>a-brill.com</a>
        <SocialLogotypes/>
    </div>
  </div>
);

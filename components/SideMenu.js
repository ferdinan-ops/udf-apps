import HomeIcon from "../public/icons/home-2.svg";
import NotifIcon from "../public/icons/notification.svg";
import SavedIcon from "../public/icons/bookmarks.svg";
import ProfileIcon from "../public/icons/profile.svg";
import MoreIcon from "../public/icons/more.svg";
export default function SideMenu() {
   return (
      <div className='w-3/12'>
         <div className="flex items-center">
            <img src="/logo.svg" alt="" />
            <p className='font-bold text-2xl ml-4'>UDF</p>
         </div>
         <div className="mt-10 font-semibold pr-12">
            <ul className="text-slate-900">
               <li><a href="#" className="w-full py-[15px] px-[10px] flex items-center gap-4 mb-3 text-[#A41312]"><HomeIcon />Beranda</a></li>
               <li><a href="#" className="w-full py-[15px] px-[10px] flex items-center gap-4 mb-3"><NotifIcon />Notifikasi</a></li>
               <li><a href="#" className="w-full py-[15px] px-[10px] flex items-center gap-4 mb-3"><SavedIcon />Disimpan</a></li>
               <li><a href="#" className="w-full py-[15px] px-[10px] flex items-center gap-4 mb-3"><ProfileIcon />Profil</a></li>
               <li><a href="#" className="w-full py-[15px] px-[10px] flex items-center gap-4"><MoreIcon />Lainnya</a></li>
            </ul>
            <button className="my-4 py-3 w-full bg-[#A41312] text-white rounded-full">Buat Diskusi</button>
         </div>
      </div>
   );
}

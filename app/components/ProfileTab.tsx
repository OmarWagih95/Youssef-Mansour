'use client'




const ProfileTab = ({title,value,activeTab,setActiveTab}:{title:string,value:number,activeTab:number,setActiveTab:React.Dispatch<React.SetStateAction<number>>}) => {

  const handleClick =async () => {

      setActiveTab(value); // Otherwise, just set the active tab
  };

  return (
    <div 
    onClick={handleClick}
    className={`${value === activeTab ?'text-white underline':'text-white/60'} hover:cursor-pointer text-xl lg:text-3xl text-nowrap`}>{title}</div>

  )
}

export default ProfileTab
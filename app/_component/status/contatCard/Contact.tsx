import {ContactCard} from "@/app/_component/status/contatCard/ContactCard";
import {Card} from "@/components/ui/card";

export const Contact = () => {
  return (
    <div className={"flex flex-col gap-3"}>
      <ContactCard
        title={"Maël Colomé"}
        image={"https://media.licdn.com/dms/image/v2/D4E03AQFi6_lgRym8XQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723238219743?e=1732147200&v=beta&t=bDQOJW-gKRng4uts39Zp-m_j6-PRQnFldsu5JfDlM3I"}
        mediumImage={"https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"}
        description={"Contact me in linkedin"}
        url={"https://www.linkedin.com/in/mael-colome/"}
      />
      <ContactCard
        title={"Email"}
        image={"https://media.licdn.com/dms/image/v2/D4E03AQFi6_lgRym8XQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723238219743?e=1732147200&v=beta&t=bDQOJW-gKRng4uts39Zp-m_j6-PRQnFldsu5JfDlM3I"}
        mediumImage={"https://cdn-1.webcatalog.io/catalog/icloud-mail/icloud-mail-icon-filled-256.png?v=1714774700966"}
        description={"Email for any inquiries"}
        url={"mailto:maelcolome.pro@icloud.com"}
      />
    </div>
  );
};
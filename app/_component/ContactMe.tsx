import {Section} from "@/app/_component/Section";
import {Badge} from "@/components/ui/badge";
import {ContactCard} from "@/app/_component/status/contatCard/ContactCard";

export const ContactMe = () => {
  return (
    <Section className={"flex flex-col items-start gap-4"}>
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you.
      </h2>
      <div className={"flex max-md:flex-col gap-4 flex-1 w-full"}>
        <ContactCard
          title={"Linkedin"}
          image={"https://media.licdn.com/dms/image/v2/D4E03AQFi6_lgRym8XQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723238219743?e=1732147200&v=beta&t=bDQOJW-gKRng4uts39Zp-m_j6-PRQnFldsu5JfDlM3I"}
          mediumImage={"https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"}
          description={"Contact me in linkedin"}
          url={"https://www.linkedin.com/in/mael-colome/"}
        />
        <ContactCard
          title={"Malt"}
          image={"https://media.licdn.com/dms/image/v2/D4E03AQFi6_lgRym8XQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723238219743?e=1732147200&v=beta&t=bDQOJW-gKRng4uts39Zp-m_j6-PRQnFldsu5JfDlM3I"}
          mediumImage={"https://play-lh.googleusercontent.com/pCYfqB1v-c9Phmvjxji_v37Lf1l59fg1pIy17PztwmS2yoRvGtNAgHZlOHQf0AQo_MZv"}
          description={"Contact me on Malt for a mission"}
          url={"https://www.malt.fr/profile/maelcolome"}
        />
        <ContactCard
          title={"Email"}
          image={"https://media.licdn.com/dms/image/v2/D4E03AQFi6_lgRym8XQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723238219743?e=1732147200&v=beta&t=bDQOJW-gKRng4uts39Zp-m_j6-PRQnFldsu5JfDlM3I"}
          mediumImage={"https://cdn-1.webcatalog.io/catalog/icloud-mail/icloud-mail-icon-filled-256.png?v=1714774700966"}
          description={"Email for any inquiries"}
          url={"mailto:maelcolome.pro@icloud.com"}
        />
      </div>
    </Section>
  );
};
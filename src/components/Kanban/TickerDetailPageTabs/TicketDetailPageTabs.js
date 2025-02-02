import React from "react";
import { Tabs } from "antd";

const TicketDetailPageTabs = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Details",
      children: (
        <div
          style={{
            padding: "10px 20px",
          }}
        >
          Velit anim est voluptate pariatur in quis sit culpa adipisicing duis.
          Reprehenderit consequat esse nulla aute duis incididunt ullamco eu
          nisi est nostrud. Nisi veniam do officia aliquip id ex consequat et
          minim laborum dolore in sit. Velit anim est voluptate pariatur in quis
          sit culpa adipisicing duis. Reprehenderit consequat esse nulla aute
          duis incididunt ullamco eu nisi est nostrud. Nisi veniam do officia
          aliquip id ex consequat et minim laborum dolore in sit. Velit anim est
          voluptate pariatur in quis sit culpa adipisicing duis. Reprehenderit
          consequat esse nulla aute duis incididunt ullamco eu nisi est nostrud.
          Nisi veniam do officia aliquip id ex consequat et minim laborum dolore
          in sit. Velit anim est voluptate pariatur in quis sit culpa
          adipisicing duis. Reprehenderit consequat esse nulla aute duis
          incididunt ullamco eu nisi est nostrud. Nisi veniam do officia aliquip
          id ex consequat et minim laborum dolore in sit. Velit anim est
          voluptate pariatur in quis sit culpa adipisicing duis. Reprehenderit
          consequat esse nulla aute duis incididunt ullamco eu nisi est nostrud.
          Nisi veniam do officia aliquip id ex consequat et minim laborum dolore
          in sit.
        </div>
      ),
    },
    {
      key: "2",
      label: "Subtasks",
      children: (
        <div
          style={{
            padding: "10px 20px",
          }}
        >
          Ea ea ad duis esse excepteur amet eu anim incididunt ea nostrud ea do
          ipsum. Ex quis est amet pariatur proident incididunt dolor dolor in
          exercitation elit. Ullamco ex adipisicing consectetur labore
          reprehenderit qui deserunt cupidatat enim tempor aliqua minim. Dolore
          aliqua laborum amet cillum ex ipsum officia cillum enim ut veniam.
          Nisi labore aliqua officia reprehenderit pariatur nostrud enim
          deserunt officia veniam. Dolore nulla est sit ipsum cillum nulla irure
          aute Lorem pariatur. Sit consectetur ullamco culpa esse exercitation
          enim. Occaecat aute reprehenderit dolore anim nulla minim consectetur
          est sint ut. Proident est est minim enim sint fugiat ex cillum ipsum
          sit non. Commodo tempor aute et in eu eiusmod. Pariatur esse consequat
          officia cillum magna deserunt exercitation fugiat consectetur amet
          esse excepteur. Esse occaecat est quis tempor voluptate sit nisi sit
          consectetur nulla commodo anim. Id sunt amet occaecat ullamco elit
          tempor cupidatat quis laborum sunt Lorem nostrud veniam elit. Occaecat
          Lorem mollit elit sunt aliquip voluptate elit in deserunt incididunt
          est. Ullamco et elit ipsum consequat sint mollit ad nulla adipisicing
          aute cillum magna. Non pariatur dolore esse sunt exercitation
          exercitation dolore ea proident quis in et excepteur nisi. Proident
          commodo nostrud excepteur labore ad voluptate dolore esse non ut.
          Reprehenderit ullamco tempor cupidatat consequat ea ex aliqua fugiat
          labore quis est non. Est deserunt nulla tempor proident esse nostrud
          ex et in ex quis consequat. Do incididunt irure esse enim labore
          ullamco anim minim ipsum tempor sit aliquip.
        </div>
      ),
    },
    {
      key: "3",
      label: "Action Items",
      children: (
        <div
          style={{
            padding: "10px 20px",
          }}
        >
          Esse amet anim cupidatat officia. Voluptate officia reprehenderit anim
          tempor laboris exercitation veniam do minim. Irure excepteur commodo
          ex dolor duis velit sint voluptate anim ipsum. Ipsum ea exercitation
          id aliqua velit ipsum sit sit anim esse commodo irure id pariatur. Ex
          elit sint laborum labore excepteur id duis. Laborum fugiat dolore aute
          aliquip nisi minim nulla qui occaecat labore. Consequat consequat
          velit culpa ea duis ad in irure. Ea commodo dolore pariatur veniam ea
          non incididunt sunt cupidatat reprehenderit. Elit et sunt qui sit.
          Anim elit mollit ex nostrud incididunt deserunt minim consectetur
          cillum aute eu sunt laborum. Proident cillum ipsum voluptate sit
          incididunt sint id veniam duis irure magna Lorem. Commodo sint nulla
          laborum deserunt ullamco enim cupidatat deserunt duis. Cillum est non
          ullamco aute. Aliqua aliquip consequat aliquip nulla tempor est.
          Laboris sint ea excepteur ut mollit ut nulla do nulla nostrud sunt.
          Excepteur irure sit sint nisi aliqua ut labore sit consectetur est
          consectetur culpa incididunt et. Cillum eu ut occaecat ut mollit
          reprehenderit est quis aliqua enim exercitation Lorem voluptate
          officia. Consectetur non sunt tempor adipisicing. Sint voluptate
          ullamco duis labore consequat ut magna eu excepteur minim excepteur.
          Voluptate reprehenderit duis culpa do et in laboris ipsum non
          excepteur eiusmod. Nostrud laboris id culpa minim quis nostrud commodo
          amet reprehenderit. Magna do ea sunt esse. In nostrud ea voluptate
          magna ut reprehenderit. Lorem dolor Lorem dolor sunt sint nulla aute.
          Sit dolor ex anim non. Magna nostrud et anim amet eiusmod dolore sit
          exercitation consequat sint sunt. Nisi nisi voluptate Lorem deserunt
          eiusmod ullamco. Mollit laboris aute ex mollit veniam do sint magna
          minim anim culpa cillum tempor. Nostrud irure enim tempor excepteur
          culpa proident excepteur fugiat officia. Ut eu exercitation ex amet
          occaecat anim adipisicing consequat aliquip ea ex. Tempor enim laborum
          sunt aute mollit eu. Esse quis excepteur exercitation laborum deserunt
          eiusmod do ad aute commodo. Veniam est commodo et ut ut voluptate
          dolor non cillum non. Ullamco nisi incididunt cillum esse commodo id
          voluptate cupidatat mollit. Duis irure consectetur ut excepteur
          voluptate elit qui dolore Lorem dolore id excepteur. Deserunt sint id
          minim eiusmod do non tempor excepteur reprehenderit sit proident
          deserunt. Do deserunt amet est culpa aliquip consequat cillum aliquip
          non in est ut duis.
        </div>
      ),
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default TicketDetailPageTabs;

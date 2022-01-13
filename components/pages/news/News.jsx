import NewsBadge from "../../ui/NewsBadge";

export default function News() {
  return (
    <div className="mx-[16px] mt-[25px] lg:mt-[40px] mb-[80px] lg:mx-[300px]">
      <div className="flex flex-row items-center space-x-[6px] font-bold">
        <NewsBadge title="news" />
        <NewsTime date="November 19, 2021" />
      </div>
      <Headline>UI College of Medicine ranked 4th in Africa</Headline>
      <TextBlock>
        Duis integer id ultrices ipsum tristique congue. Feugiat consectetur nam
        pharetra maecenas integer turpis tincidunt. Dui habitasse vel convallis
        vulputate. Facilisis consequat, eu ultricies dignissim. Enim gravida sed
        pulvinar nibh. Hac eget eget ligula pellentesque praesent nisi, morbi.
        Urna nisi consectetur consequat at laoreet velit, curabitur vitae. Hac
        sem volutpat vitae id dolor turpis sit. Pulvinar convallis nunc massa
        enim. Enim ornare nulla diam arcu in volutpat in gravida. Turpis eu at
        tristique id nulla magna nulla. Ultricies eleifend mi turpis quisque sem
        justo, sollicitudin amet. Convallis massa bibendum diam elementum
        sollicitudin bibendum iaculis id magna. Sollicitudin diam molestie
        tortor congue est. Leo accumsan amet, nibh facilisis. Non, adipiscing
        sed mollis morbi neque, cursus. Faucibus urna nunc cursus quis feugiat
        augue odio neque a. Mauris donec ultricies accumsan ac at diam lectus.
        Cras luctus semper nisl nunc. Nec et tortor eget amet. Morbi malesuada
        sed sed cras. Euismod in vestibulum mattis orci est, etiam commodo magna
        pulvinar. Eu faucibus posuere tristique tristique cursus amet. Etiam
        arcu phasellus leo, proin quis sagittis sit. Cursus suspendisse enim
        egestas elit consequat, id. Nunc lorem in in egestas pharetra adipiscing
        augue nulla. Tortor pretium fames eu ipsum duis. Ultricies sit quis ut
        velit diam eget. A dictum egestas accumsan tellus egestas mattis
        ultricies porta sagittis. Urna, amet, nunc ornare mauris, montes. Sed
        facilisis tellus a pellentesque aliquet. Enim urna urna neque metus at
        nunc odio tristique odio. Urna, amet, gravida donec accumsan nibh.
        Tortor varius mauris amet eget tristique vitae fames gravida. Odio in
        ullamcorper dui et. Et lacus nulla sed turpis. Egestas felis,
        pellentesque nam et, massa. Faucibus gravida aliquam mauris placerat et.
        Facilisis consequat, eu ultricies dignissim. Enim gravida sed pulvinar
        nibh. Duis integer id ultrices ipsum tristique congue. Feugiat
        consectetur nam pharetra maecenas integer turpis tincidunt. Dui
        habitasse vel convallis vulputate. Hac eget eget ligula pellentesque
        praesent nisi, morbi. Urna nisi consectetur consequat at laoreet velit,
        curabitur vitae. Hac sem volutpat vitae id dolor turpis sit. Pulvinar
        convallis nunc massa enim. Enim ornare nulla diam arcu in volutpat in
        gravida. Turpis eu at tristique id nulla magna nulla. Hac eget eget
        ligula pellentesque praesent nisi, morbi. Urna nisi consectetur
        consequat at laoreet velit, curabitur vitae. Hac sem volutpat vitae id
        dolor turpis sit. Pulvinar convallis nunc massa enim. Enim ornare nulla
        diam arcu in volutpat in gravida. Turpis eu at tristique id nulla magna
        nulla. Duis integer id ultrices ipsum tristique congue. Feugiat
        consectetur nam pharetra maecenas integer turpis tincidunt. Dui
        habitasse vel convallis vulputate. Facilisis consequat, eu ultricies
        dignissim. Enim gravida sed pulvinar nibh. . Ultricies eleifend mi
        turpis quisque sem justo, sollicitudin amet. Convallis massa bibendum
        diam elementum sollicitudin bibendum iaculis id magna. Sollicitudin diam
        molestie tortor congue est. Leo accumsan amet, nibh facilisis. Non,
        adipiscing sed mollis morbi neque, cursus. Faucibus urna nunc cursus
        quis feugiat augue odio neque a. Mauris donec ultricies accumsan ac at
        diam lectus. Cras luctus semper nisl nunc. Nec et tortor eget amet.
        Morbi malesuada sed sed cras. Euismod in vestibulum mattis orci est,
        etiam commodo magna pulvinar. Eu faucibus posuere tristique tristique
        cursus amet. Etiam arcu phasellus leo, proin quis sagittis sit. Cursus
        suspendisse enim egestas elit consequat, id. Nunc lorem in in egestas
        pharetra adipiscing augue nulla. Tortor pretium fames eu ipsum duis.
        Ultricies sit quis ut velit diam eget. A dictum egestas accumsan tellus
        egestas mattis ultricies porta sagittis. Urna, amet, nunc ornare mauris,
        montes. Sed facilisis tellus a pellentesque aliquet. Enim urna urna
        neque metus at nunc odio tristique odio. Urna, amet, gravida donec
        accumsan nibh. Tortor varius mauris amet eget tristique vitae fames
        gravida. Odio in ullamcorper dui et. Et lacus nulla sed turpis. Egestas
        felis, pellentesque nam et, massa. Faucibus gravida aliquam mauris
        placerat et. Enim gravida sed pulvinar nibh. Wurpis eu at tristique id
        nulla magna nulla. Feugiat consectetur nam pharetra maecenas integer
        turpis tincidunt. Dui habitasse vel convallis vulputate. Facilisis
        consequat, eu ultricies dignissim. Enim gravida sed pulvinar nibh. Hac
        eget eget ligula pellentesque praesent nisi, morbi. Urna nisi
        consectetur consequat at laoreet velit, curabitur vitae. Hac sem
        volutpat vitae id dolor turpis sit. Pulvinar convallis nunc massa enim.
        Enim ornare nulla diam arcu in volutpat in gravida. Turpis eu at
        tristique id nulla magna nulla.
      </TextBlock>
    </div>
  );
}

const Headline = ({ children }) => {
  return (
    <h1 className="font-bold text-[21px] mt-[11px] mb-[16px]">{children}</h1>
  );
};

const NewsTime = ({ date }) => <div className="text-[12px]">{date}</div>;

const TextBlock = ({ children }) => (
  <p className="text-justify text-[15px]">{children}</p>
);

'use client';

import BuilderImg from '@assets/images/builder.png';
import { Features } from '@components/Features';

export const BuildVirtualSpace = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Build Virtual Space
            <br /> by drag and drop
          </>
        }
        image={BuilderImg}
        text="Create Virtual Space in seconds, invite friend, protect by the password."
      />
    </Features>
  );
};

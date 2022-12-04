import { Block } from './block';
import { MD5 } from 'md5-js-tools';
export class BlockChain {
  private blocks: Block[] = [];

  public constructor() {
    this.addNewBlock();
  }

  public generateRandomData(): number {
    return Math.random() * 10000000;
  }

  public addNewBlock(): void {
    const height = this.getLength() + 1;
    const data = this.generateRandomData();
    const dataHashed = MD5.generate(String(data));
    const previousBlockHash =
      this.getLength() === 0 ? '-' : this.getLastBlock().getHash();
    const difficulty = height + 1;
    let nonce = 0;

    while (true) {
      try {
        const hash = MD5.generate(previousBlockHash + nonce + dataHashed);

        const block = new Block(
          height,
          hash,
          previousBlockHash,
          dataHashed,
          data,
          nonce,
          difficulty,
        );
        this.blocks.push(block);
        break;
      } catch (Error) {
        nonce++;
      }
    }
  }

  public getLastBlock(): Block {
    return this.blocks.at(-1);
  }

  private getLength(): number {
    return this.blocks.length;
  }
}

import { Command, CommandRunner } from 'nest-commander';
import { BlockChain } from './blockChain';
import * as fs from 'fs';

@Command({
  name: 'generate',
  arguments: '<numberOfBlocks>',
  options: { isDefault: true },
})
export class GenerateCommand extends CommandRunner {
  async run(inputs: string[]): Promise<void> {
    const numberOfBlocks = Number(inputs[0]);

    const blockChain = new BlockChain();
    console.log(blockChain.getLastBlock());
    fs.writeFileSync(
      'data/blockchain.txt',
      JSON.stringify(blockChain.getLastBlock()),
    );

    for (let i = 1; i < numberOfBlocks; i++) {
      blockChain.addNewBlock();
      console.log(blockChain.getLastBlock());
      fs.appendFileSync(
        'data/blockchain.txt',
        JSON.stringify(blockChain.getLastBlock()),
      );
    }
  }
}

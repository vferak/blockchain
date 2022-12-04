export class Block {
  public constructor(
    private readonly height: number,
    private readonly hash: string,
    private readonly previousHash: string,
    private readonly dataHash: string,
    private readonly data: number,
    private readonly nonce: number,
    private readonly difficulty: number,
  ) {
    if (hash.substring(0, difficulty) !== '0'.repeat(difficulty)) {
      throw Error();
    }
  }

  public getHash(): string {
    return this.hash;
  }
}

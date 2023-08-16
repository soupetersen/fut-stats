import { BadRequestException } from "@nestjs/common";

export class TweetsCache {
  private static instance: TweetsCache;

  private cache: Map<string, string> = new Map();

  constructor() {
    if (TweetsCache.instance) {
      throw new BadRequestException(
        "Error: Instantiation failed: Use TweetsCache.getInstance() instead of new.",
      );
    }
    TweetsCache.instance = this;
  }

  public static getInstance(): TweetsCache {
    if (!TweetsCache.instance) {
      TweetsCache.instance = new TweetsCache();
    }

    return TweetsCache.instance;
  }

  public get(key: string): string {
    return this.cache.get(key);
  }

  public set(key: string, value: any): void {
    this.cache.set(key, value);
  }

  public getAll(): string[] {
    const arr = Array.from(this.cache);
    return arr.map((item) => item[0]);
  }

  public size(): number {
    return this.cache.size;
  }

  public delete(key: string): void {
    this.cache.delete(key);
  }

  public clear(): void {
    this.cache.clear();
  }
}

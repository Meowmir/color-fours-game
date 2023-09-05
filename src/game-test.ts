export type Position = [number, number];
export type PositionObserver = ((position: Position) => void) | null;

export class GameTest {
  public chipPosition: Position = [1, 1]
  private observers: PositionObserver[] = []

  public observe(o: PositionObserver): () => void {
    this.observers.push(o)
    this.emitChange()

    return (): void => {
      this.observers = this.observers.filter((t) => t !== o)
    }
  }
public emitChange() {
  PositionObserver(chipPosition);
}

export function observe(o) {
  if (PositionObserver) {
    throw new Error("Multiple observers not implemented.");
  }

  PositionObserver = o;
  emitChange();
}

export function moveChip(toX, toY) {
  chipPosition = [toX, toY];
  emitChange();
}

}

jest.mock('clsx', () => ({
  default: (...args) => args.filter(Boolean).join(' ')
}))

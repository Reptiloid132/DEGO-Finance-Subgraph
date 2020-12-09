import { BigInt } from "@graphprotocol/graph-ts"
import {
  DegoToken,
  eveSetRate,
  eveRewardPool,
  Transfer,
  Mint,
  Approval,
  GovernanceTransferred
} from "../generated/DegoToken/DegoToken"
import { _eveSetRate, _Transfer, _Mint, _Approval,
_GovernanceTransferred } from "../generated/schema"

export function handleeveSetRate(event: eveSetRate): void {
  let entity = _eveSetRate.load(event.params.burn_rate.toHex())

  if (entity == null) {
    entity = new _eveSetRate(event.params.burn_rate.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.burn_rate = event.params.burn_rate
  entity.reward_rate = event.params.reward_rate
  entity.save()
}

export function handleeveRewardPool(event: eveRewardPool): void {}

export function handleTransfer(event: Transfer): void {
  let entity = _Transfer.load(event.params.from.toHex())

  if (entity == null) {
    entity = new _Transfer(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleMint(event: Mint): void {
  let entity = _Mint.load(event.params.from.toHex())

  if (entity == null) {
    entity = new _Mint(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleApproval(event: Approval): void {
  let entity = _Approval.load(event.params.owner.toHex())

  if (entity == null) {
    entity = new _Approval(event.params.owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleGovernanceTransferred(
  event: GovernanceTransferred
): void {
  let entity = _GovernanceTransferred.load(event.params.previousOwner.toHex())

  if (entity == null) {
    entity = new _GovernanceTransferred(event.params.previousOwner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

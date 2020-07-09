<template>
	<div class="note-preview">
		<div class="note-preview__title">{{note.title}} - {{note.children.length}}</div>
		<div class="note-preview__todo-list">
			<label class="note-preview__list-item" v-for="(item, index) in note.children" v-show="showItem(index, length, shownRows)" :key="index">
				<input type="checkbox" v-model="item.checked" disabled>
				<span :class="{'note-preview__list-item-name': true, 'note-preview__list-item-name_checked': item.checked}">{{item.name}}</span>
			</label>
			<div class="note-preview__ellipsis" v-if="length > shownRows">
				...
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "vNotePreview",
		props: {
			note:       { required: true, type: Object },
			length:     { required: true, type: Number },
			shownRows:  { required: true, type: Number }
		},
		mounted() {
		},
		methods: {
			showItem(index, length, shownRows) {
				return index < shownRows - 1 || (index + 1 === length && length === shownRows)
			}
		}
	}
</script>

<style lang="scss" src="./vNotePreview.scss"/>
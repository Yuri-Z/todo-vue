<template>
	<div class="page page_home">
		<div class="page__header">
			<v-button type="primary">Кнопка</v-button>
			<div class="button button_secondary"></div>
		</div>
		<div class="page__body">
			<v-note-preview v-for="(note, index) in list"
			                :note="note"
			                :length="note.children.length"
			                :shown-rows="3" :key="index"/>
		</div>
	</div>
</template>

<script>
	import vNotePreview from '@/components/vNotePreview/vNotePreview.vue'
	
	export default {
		name: 'Home',
		components: {
			vNotePreview
		},
		data() {
			return {
				list: [
					{title: 'Item 1', children: [{name: 'check 1', checked: true}, {name: 'check 2', checked: false}, {name: 'check 3', checked: false}]},
					{title: 'Item 2', children: [{name: 'check 1', checked: false}, {name: 'check 2', checked: false}, {name: 'check 3', checked: false}, {name: 'check 4', checked: false}]},
					{title: 'Item 3', children: [{name: 'check 1', checked: false}, {name: 'check 2', checked: false}, {name: 'check 3', checked: false}, {name: 'check 4', checked: false}]},
					{title: 'Item 4', children: [{name: 'check 1', checked: false}, {name: 'check 2', checked: false}, {name: 'check 3', checked: false}, {name: 'check 4', checked: false}]},
				]
			}
		}
	}
</script>
